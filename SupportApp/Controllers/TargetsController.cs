﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Asn1.Ocsp;
using SupportApp.Models;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TargetsController : ControllerBase
    {
        private readonly SupportAppDbContext _context;

        public TargetsController(SupportAppDbContext context)
        {
            _context = context;
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
            _context.Target.Add(target);
            await _context.SaveChangesAsync();

            return Ok(target);
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


        // AssignSupportEngineer
        [HttpGet("/ticket/{ticketId}/assignsupportengineer/{SupportEngineerId}")]
        public async Task<ActionResult<Target>> AssignSupportEngineer(int ticketId, [FromBody] Target request)
        {
            try
            {
                // Find the target ticket based on the provided ticketId
                var targetTicket = await _context.Ticket.FindAsync(ticketId);

                // Check if the ticket exists
                if (targetTicket == null)
                {
                    return NotFound("Ticket not found");
                }

                
                var newTarget = new Target
                {
                    TicketId = ticketId,
                    AgentId = request.AgentId,
                    //DepartmentId = request.DepartmentId,
                    //UnitId = request.UnitId,
                    //Objective = request.Objective
                };

                // Add the new target to the context and save changes
                _context.Target.Add(newTarget);
                await _context.SaveChangesAsync();

                return Ok(newTarget);
            }
            catch (Exception ex)
            {
                // Handle exceptions, log errors, and return an appropriate response
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }
    }
}
