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

    public void CreateTicket(EmailBoxServcie.EmailDetails emailDetails)
    {
        var existingTicket = _context.Ticket.FirstOrDefault(ticket => ticket.MessageId == emailDetails.MessageId);
        if (existingTicket == null)
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
            };
            _context.Ticket.Add(ticket);
            _context.SaveChanges();
        }
        else
        {
            Console.WriteLine($"Ticket with Message Id '{emailDetails.MessageId}' already exits.");
            
        }
        
    }
}