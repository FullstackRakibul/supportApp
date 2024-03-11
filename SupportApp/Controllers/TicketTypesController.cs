using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Models;
using SupportApp.Service;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketTypesController : ControllerBase
    {
        private readonly SupportAppDbContext _context;
        private readonly TicketTypeService _ticketTypeService;
       public TicketTypesController(SupportAppDbContext context , TicketTypeService ticketTypeService )
        {
            _context = context;
            _ticketTypeService = ticketTypeService;
        }

        // GET: api/TicketType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketType>>> GetTicketType()
        {
          if (_context.TicketType == null)
          {
              return NotFound();
          }
            return await _context.TicketType.ToListAsync();
        }

        // GET: api/TicketType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketType>> GetTicketType(int id)
        {
          if (_context.TicketType == null)
          {
              return NotFound("Not Ticket type is found.");
          }
            var ticketType = await _context.TicketType.FindAsync(id);
            
            if (ticketType == null)
            {
                return NotFound();
            }

            return ticketType;
        }

        // PUT: api/TicketType/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketType(int id, TicketType ticketType)
        {
            if (id != ticketType.Id)
            {
                return BadRequest();
            }

            _context.Entry(ticketType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketTypeExists(id))
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

        // POST: api/TicketType
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TicketType>> PostTicketType(TicketType ticketType)
        {
          if (_context.TicketType == null)
          {
              return Problem("Entity set 'SupportAppDbContext.TicketType'  is null.");
          }
            _context.TicketType.Add(ticketType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketType", new { id = ticketType.Id }, ticketType);
        }

        // DELETE: api/TicketType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicketType(int id)
        {
            if (_context.TicketType == null)
            {
                return NotFound();
            }
            var ticketType = await _context.TicketType.FindAsync(id);
            if (ticketType == null)
            {
                return NotFound();
            }

            _context.TicketType.Remove(ticketType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TicketTypeExists(int id)
        {
            return (_context.TicketType?.Any(e => e.Id == id)).GetValueOrDefault();
        }


        // .......................... ticket type apis..............

        [HttpPost("ticket/type/create")]
        public async Task<ActionResult<TicketType>> CreateTicketType(TicketType ticketType) {
            try {
                if (string.IsNullOrWhiteSpace(ticketType.TypeName))
                {
                    throw new ArgumentException("Subject cannot be empty.");
                }
                await _ticketTypeService.CreateTickeType(ticketType);
                return Ok();
            }
            catch(Exception exception) {
                Console.WriteLine(exception.Message);
                return BadRequest();
            }

        }

        [HttpGet("ticket/type/list")]
        public async Task<ActionResult<TicketType>> GetTicketTypeList() {
            try
            {
                var getTicketTypeList = await _ticketTypeService.GetTicketTypeListAsync();
                return Ok(getTicketTypeList);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500);
            }
        }
    }
}
