using System.Diagnostics;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using MimeKit;
using SupportApp.Models;
namespace SupportApp.Service;
public class TicketService
{
    private readonly SupportAppDbContext _context;
    public TicketService(SupportAppDbContext context)
    {
        _context = context;
    }
    // private string GenerateTicketNumber()
    // {
    //     
    //     return DateTime.Now.ToString("yyyyMMddHHmmss") + new Random().Next(1000, 9999);
    // }
    
    private string GenerateTicketNumber()
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
        // Using database context checking the ticket number
        var existingTicket = _context.Ticket.FirstOrDefault(t => t.TicketNumber == ticketNumber);
        // Return true if no existing ticket is found, false otherwise
        return existingTicket == null;

    }
    
    // create ticket from mail 
    public void CreateTicketFromEmail(EmailBoxService.EmailDetails emailDetails)
    {
        var existingTicket = _context.Ticket.FirstOrDefault(ticket => ticket.MessageId == emailDetails.MessageId);
        // Find the "Date" header
        var dateHeader = emailDetails.Headers.FirstOrDefault(header => header.Key == "Date");

        if (existingTicket == null && DateTime.TryParse(dateHeader.Value, out var createdDate))
        {
            var ticket = new Ticket
            {
                Title = emailDetails.Subject,
                TicketNumber = GenerateTicketNumber(),
                MessageId = emailDetails.MessageId,
                Description = emailDetails.Body,
                Priority = Priority.BusinessClass,
                Attachment = emailDetails.Attachments != null && emailDetails.Attachments.Any()
                    ? string.Join(",", emailDetails.Attachments)
                    : null,
                Status = TicketStatus.Acknowledged,
                CreatedAt = Convert.ToDateTime(createdDate),
                //CreatedAt = createdDate.ToString("yyyy-MM-dd HH:mm:ss"),
                UpdatedAt = DateTime.Now,
                IsEmail =true,
                FromEmail = emailDetails.From.ToString(),
                EmailCc = emailDetails.Cc
            };
            _context.Ticket.Add(ticket);
            _context.SaveChanges();
        }
        else
        {
            Console.WriteLine($"Ticket with Message Id '{emailDetails.MessageId}' already exits.");
        }
    }
    // create ticket from frontend form 
    public void CreateTicket(Ticket ticket)
    {
        try
        {
            var generatedTicketNumber = GenerateTicketNumber();
            var ticketData = new Ticket
            { 
              Title      = ticket.Title,
              TicketNumber = generatedTicketNumber,
              Description = ticket.Description,
              Attachment = ticket.Attachment,
              CreatedAt = DateTime.Now,
              MessageId =generatedTicketNumber ,
              Priority = Priority.Regular,
              Status = TicketStatus.Open,
              IsEmail = false,
              UpdatedAt = DateTime.Now,
              
            };
            Console.WriteLine(ticketData);
            _context.Ticket.Add(ticketData);
            _context.SaveChanges();
            Console.WriteLine("Create Ticket Successfully.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("This is Service layer error.",ex.Message);
            
        }
    }

}