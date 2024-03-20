using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Service;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TargetsController : ControllerBase
    {
        private readonly SupportAppDbContext _context;
        private readonly TargetService _targetService;
        public TargetsController(SupportAppDbContext context , TargetService targetService )
        {
            _context = context;
            _targetService = targetService;
        }

        // GET: api/Targets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Target>>> GetTarget()
        {
            if (_context.Target == null)
            {
                return NotFound();
            }
            return await _context.Target.ToListAsync();
        }

        // GET: api/Targets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Target>> GetTarget(int id)
        {
            if (_context.Target == null)
            {
                return NotFound();
            }
            var target = await _context.Target.FindAsync(id);

            if (target == null)
            {
                return NotFound();
            }

            return target;
        }

        // PUT: api/Targets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarget(int id, Target target)
        {
            if (id != target.Id)
            {
                return BadRequest();
            }

            _context.Entry(target).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TargetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Target
        [HttpPost]
        public async Task<IActionResult> PostTarget([FromBody] Target target )
        {
            var targetTicket = _context.Target.FirstOrDefault(attribute => attribute.TicketId == target.TicketId);
            if (targetTicket == null)
            {
                _context.Target.Add(target);
                await _context.SaveChangesAsync();
                return Ok(target);
            }
            else {
                return BadRequest("Ticket is already assigned!");
            }

            
        }

        // DELETE: api/Targets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarget(int id)
        {
            if (_context.Target == null)
            {
                return NotFound();
            }
            var target = await _context.Target.FindAsync(id);
            if (target == null)
            {
                return NotFound();
            }

            _context.Target.Remove(target);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TargetExists(int id)
        {
            return (_context.Target?.Any(e => e.Id == id)).GetValueOrDefault();
        }


        //// AssignSupportEngineer
        //[HttpPost("/ticket/{ticketId}/assignsupportengineer/{SupportEngineerId}")]
        //public async Task<ActionResult<Target>> AssignSupportEngineer(int ticketId, [FromBody] Target request)
        //{
        //    try
        //    {
        //        // Find the target ticket based on the provided ticketId
        //        var targetTicket = await _context.Ticket.FindAsync(ticketId);

        //        // Check if the ticket exists
        //        if (targetTicket == null)
        //        {
        //            return NotFound("Ticket not found");
        //        }

                
        //        var newTarget = new Target
        //        {
        //            TicketId = ticketId,
        //            AgentId = request.AgentId,
        //            //DepartmentId = request.DepartmentId,
        //            //UnitId = request.UnitId,
        //            //Objective = request.Objective
        //        };

        //        // Add the new target to the context and save changes
        //        _context.Target.Add(newTarget);
        //        await _context.SaveChangesAsync();

        //        return Ok(newTarget);
        //    }
        //    catch (Exception ex)
        //    {
        //        // Handle exceptions, log errors, and return an appropriate response
        //        return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
        //    }
        //}



        [HttpGet("assign/ticket/{id}")]
        public async Task<IActionResult> GetAssignDetails(int id)
        {
            var ticketDetailsData = await _context.Target.FirstOrDefaultAsync(t => t.TicketId == id);

            if (ticketDetailsData == null)
            {
                return NotFound();
            }

            return Ok(ticketDetailsData);
        }


        // ..............................................Agent API's........................................


        // assign ticket list for Agnet
		[HttpGet("agentIssueList/{agentId}")]
		public async Task<IActionResult> AgentIssueList(string agentId)
		{
			var agentData = await _context.Agent.FirstOrDefaultAsync(agent => agent.EmpCode == agentId);
			if (agentData == null) { 
                return NotFound("No data for this agent .");
            }

			var ticketDetailsData = await _context.Target
									.Include(t => t.Ticket) 
									.Where(t => t.AgentId == agentData.AgentId) 
									.Select(t => t.Ticket) 
									.ToListAsync();

			if (ticketDetailsData == null || ticketDetailsData.Count == 0)
			{
				return NotFound("No ticket details found for this agent.");
			}

			return Ok(ticketDetailsData);
		}

		// assign support engineer ............




		// ..............................................Agent API's........................................




		// ..............................................Admin API's........................................
		[HttpPost("assignSupportEngineer")]
		public IActionResult AssignSupportEngineer([FromBody] TargetSupportEngineerDto targetSupportEngineerDto)
        //public IActionResult AssignSupportEngineer(int ticketId, int agentId)
        {
			try
			{
				int ticketId = targetSupportEngineerDto.TicketId;
				int agentId = targetSupportEngineerDto.AgentId;

				_targetService.AssignSupportEngineer(ticketId, agentId);
				return Ok("Support engineer assigned successfully #$.");
			}
			catch (Exception ex)
			{
				// Log the exception or handle it based on your application's requirements
				return BadRequest("Failed to assign support engineer.");
			}
		}




	}

}
