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
    private string GenerateTicketNumber()
    {
        return DateTime.Now.ToString("yyyyMMddHHmmss") + new Random().Next(1000, 9999);
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
            _context.Ticket.Add(ticket);
            _context.SaveChanges();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }

}