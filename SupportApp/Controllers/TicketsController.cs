﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MimeKit.Encodings;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Service;

namespace SupportApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly SupportAppDbContext _context;
        private readonly TicketService _ticketService;
        private readonly EmailBoxService _emailBoxService;
       

        public TicketsController(SupportAppDbContext context, TicketService ticketService, EmailBoxService emailBoxService )
        {
            _context = context;
            _ticketService = ticketService;
            _emailBoxService = emailBoxService;
        }

        // GET: api/Ticket
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicket()
        {
          // if (_context.Ticket == null)
          // {
          //     return NotFound();
          // }
          // return await _context.Ticket.ToListAsync();
          try
          {
              var tickets = await _context.Ticket.Where(ticket => ticket.Status != TicketStatus.Deleted).ToListAsync();
              return tickets;
          }
          catch (Exception ex)
          {
              Console.WriteLine(ex);
              return StatusCode(500, "Server Response Error.");
          }
        }


        [HttpGet("getTicketFromMail")]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetTicketFromMail()
        {
            try
            {
                //var tickets = await _context.Ticket.Where(ticket => ticket.Status != TicketStatus.Deleted && ticket.IsEmail == true).ToListAsync();
                var tickets = await _context.Ticket
               .Where(ticket => ticket.Status != TicketStatus.Deleted && ticket.IsEmail == true)
               .OrderByDescending(ticket => ticket.Status)
               .ToListAsync();
                return tickets;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Server Response Error.");
            }
        }

        // GET: api/Ticket/5

        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
          if (_context.Ticket == null)
          {
              return NotFound();
          }
            var ticket = await _context.Ticket.FindAsync(id);

            if (ticket == null)
            {
                return NotFound();
            }

            return ticket;
        }

        // PUT: api/Ticket/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async  Task<IActionResult> PutTicket(int id, Ticket ticket)
        {
            try
            {
                if (id != ticket.Id)
                {
                    return NotFound();
                }

                var ticketdata =await _context.Ticket.FindAsync(id);

                if (ticketdata != null) {
                ticketdata.Status = ticket.Status;
                await _context.SaveChangesAsync();
                }



            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return null;
        }

        // POST: api/Ticket
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //public async Task<ActionResult<Ticket>> PostTicket([FromBody] Ticket ticket) 
        public IActionResult CreateTicket( [FromBody] TicketAndTargetDto ticketAndTargetDto)
        {
            try
            {
              _ticketService.CreateTicket(ticketAndTargetDto);
              _context.SaveChangesAsync();


                //ticketAndTargetDto.TicketId = ticketAndTargetDto.Id;
                //_targetService.InitialTargetCreate(ticketAndTargetDto);
                //_context.SaveChangesAsync();


                //create a new target
                //int newTicketId = ticketAndTargetDto.Id;
                //var newTarget = new Target
                //{
                //    TicketId = newTicketId,
                //    DepartmentId = ticketAndTargetDto.DepartmentId,
                //    UnitId = ticketAndTargetDto.UnitId,
                    
                //};

                // Add the new Target to the context and save changes
                //_context.Target.Add(newTarget);
                //_context.SaveChanges();

                return Ok($"Ticket Create Successfully.");
          }
          catch (Exception ex)
          {
              Console.WriteLine(ex);
              return BadRequest("Create Ticket failed for BadRequest-C");
          }
        }

        // DELETE: api/Ticket/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicket(int id)
        {
            if (_context.Ticket == null)
            {
                return NotFound("No Ticket found in the database.");
            }
            var ticket = await _context.Ticket.FindAsync(id);
            if (ticket == null)
            {
                return NotFound("This Ticket is already deleted or No record found. ");
            }

            ticket.Status = TicketStatus.Deleted;
            //_context.Ticket.Remove(ticket);
            await _context.SaveChangesAsync();
            return Ok($"Ticket deleted successfully.");
        }

        private bool TicketExists(int id)
        {
            return (_context.Ticket?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpGet("FetchEmailData")]
        public IActionResult FetchEmailDataToDatabase()
        {
            try
            {
                var emailDetailsList = _emailBoxService.GetEmailDetails();
                // return Ok(emailDetailsList);
                foreach (var emailDetails in emailDetailsList)
                {
                    _ticketService.CreateTicketFromEmail(emailDetails);
                }
                return Ok(emailDetailsList);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("id")]
        public IActionResult UpdateTicketStatus()
        {
            return Ok("update status controller working");
        }

        [HttpPost("createTicketWithTarget")]
        public async Task<ActionResult<Ticket>> createTicketWithTarget([FromBody] TicketAndTargetDto ticketAndTargetDto) {
            try {
                _ticketService.CreateTicket(ticketAndTargetDto);
                return Ok($"Ticket Create Successfully.");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("ticketStatus")]
        public IActionResult GetTicketStatusEnum()
        {
            var ticketStatusEnumValues = Enum.GetNames(typeof(TicketStatus));
            return Ok(ticketStatusEnumValues);
        }

        [HttpGet("ticketPriority")]
        public IActionResult GetTicketPriorityEnum()
        {
            var ticketPriorityEnumValues = Enum.GetNames(typeof(TicketPriority));
            return Ok(ticketPriorityEnumValues);
        }

        [HttpPut("updateTicketStatus")]
        public async Task<ActionResult<Ticket>> UpdateTicketstatus([FromBody] UpdateTicketStatusDto updateTicketStatusDto )
        {
            try
            {
                _ticketService.UpdateTicketstatus(updateTicketStatusDto);
                return Ok($"Ticket status updated !");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("getTicketDetails")]
        public async Task<ActionResult<Ticket>> GetTicketDetails(int ticketId)
        {
            try
            {
                var ticketDetails = await _context.Ticket
                .Where(t => t.Id == ticketId)
                .FirstOrDefaultAsync();

                if (ticketDetails != null)
                {
                    var reviewDetails = await _context.Review
                        .Where(r => r.TicketId == ticketId)
                        .ToListAsync();


                    Console.WriteLine("Details Data fetched complete !");
                    return Ok(ticketDetails);
                }
                else
                {
                    return BadRequest($"Ticket with ID {ticketId} not found.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Server Response Error.");
            }
        }




        // employee routes apis................


    }
}
