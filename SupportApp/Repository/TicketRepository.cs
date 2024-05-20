using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Repository
{
    public class TicketRepository : ITicketInterface
    {
        private readonly SupportAppDbContext _context;
        public TicketRepository(SupportAppDbContext context) {
            _context = context;
        }


        // :::::::::::::::::::::::::::::  Create Ticket 
        public async Task<string> RaisedIssueWithAttachment(TicketAndTargetDto ticketAndTargetDto)
        {
            try
            {
                var generatedTicketNumber = GenerateTicketNumber();
                var raisedIssueData = new Ticket
                {
                    Title = ticketAndTargetDto.Title,
                    TicketNumber = generatedTicketNumber,
                    Description = ticketAndTargetDto.Description,
                    CreatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                    CreatedBy = ticketAndTargetDto.CreatedBy,
                    MessageId = generatedTicketNumber,
                    Priority = TicketPriority.Regular,
                    Status = TicketStatus.Open,
                    IsEmail = false,
                    TicketTypeId = ticketAndTargetDto.TicketTypeId,
                    UpdatedAt = null,

                };
                _context.Ticket.Add(raisedIssueData);
                _context.SaveChangesAsync();

                var assignTargetData = new Target
                {
                    TicketId = raisedIssueData.Id,
                    DepartmentId = ticketAndTargetDto.DepartmentId,
                    UnitId = ticketAndTargetDto.UnitId,
                };
                _context.Target.Add(assignTargetData);
                await _context.SaveChangesAsync();

                return "Issue Raised Successfully";

            }
            catch(Exception ex)
            {
                return ("Issue raised failed.");
            }
        }


        // :::::::::::::::::::::  Generate Ticket Number 

        public string GenerateTicketNumber()
        {
            string ticketNumber;
            bool isUnique = false;
            do
            {
                // Generate a new ticket number
                ticketNumber = DateTime.Now.ToString("yyyyMMddHHmmss") + new Random().Next(1000, 9999);
                // Check if the ticket number exists in the database
                isUnique = CheckIfTicketNumberExists(ticketNumber);
            }
            while (!isUnique);
            return ticketNumber;
        }

        private bool CheckIfTicketNumberExists(string ticketNumber)
        {
            var existingTicket = _context.Ticket.FirstOrDefault(t => t.TicketNumber == ticketNumber);
            return existingTicket == null;

        }


        // :::::::::::::::::::::::::: Update Ticket 
        public async Task<string> UpdateRaisedIssueWithAttachment(TicketAndTargetDto ticketAndTargetDto)
        {
            var retrieveData = await _context.Ticket.FirstOrDefaultAsync(t => t.Id == ticketAndTargetDto.TicketId );
            if (retrieveData != null)
            {
                return "Ticket Data Not Exits.";
            }

            return "This is a update issue test.";
        }
    }
}
