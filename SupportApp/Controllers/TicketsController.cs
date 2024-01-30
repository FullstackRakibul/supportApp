﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            
            Console.WriteLine("API working - test 01");
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
                //_ticketService.CreateTicket(ticketAndTargetDto);

                //ticketAndTargetDto.TicketId = ticketAndTargetDto.Id;
                //_targetService.InitialTargetCreate(ticketAndTargetDto);



                ticketAndTargetDto.CreatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

                var generatedTicketNumber = _ticketService.GenerateTicketNumber();
                var ticketData = new Ticket
                {
                    Title = ticketAndTargetDto.Title,
                    TicketNumber = generatedTicketNumber,
                    Description = ticketAndTargetDto.Description,
                    Attachment = ticketAndTargetDto.Attachment,
                    CreatedAt = ticketAndTargetDto.CreatedAt,
                    MessageId = generatedTicketNumber,
                    Priority = Priority.Regular,
                    Status = TicketStatus.Open,
                    IsEmail = false,
                    TicketTypeId = ticketAndTargetDto.TicketTypeId,
                    UpdatedAt = null,

                };
                //Console.WriteLine(ticketData);
                _context.Ticket.Add(ticketData);
                _context.SaveChanges();


               // Console.WriteLine("newly created ticked id ==================================",ticketData);
                var newTarget = new Target
                {
                    TicketId = ticketData.Id, // hard code 
                    DepartmentId = ticketAndTargetDto.DepartmentId,
                    UnitId = ticketAndTargetDto.UnitId,

                };
                _context.Target.Add(newTarget);

                await _context.SaveChangesAsync();

                return Ok($"Ticket Create Successfully.");

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}
