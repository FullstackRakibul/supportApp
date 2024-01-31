using Org.BouncyCastle.Utilities;
using SupportApp.DTO;
using SupportApp.Models;
namespace SupportApp.Service;
public class TicketService
{
    private readonly SupportAppDbContext _context;
    public TicketService(SupportAppDbContext context )
    {
        _context = context;
        
    }
    // private string GenerateTicketNumber()
    // {
    //     
    //     return DateTime.Now.ToString("yyyyMMddHHmmss") + new Random().Next(1000, 9999);
    // }

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
        // Using database context checking the ticket number
        var existingTicket = _context.Ticket.FirstOrDefault(t => t.TicketNumber == ticketNumber);
        // Return true if no existing ticket is found, false otherwise
        return existingTicket == null;

    }

    // create ticket from mail 
    //public async void CreateTicketFromEmail(EmailBoxService.EmailDetails emailDetails)
    public async Task CreateTicketFromEmail(EmailBoxService.EmailDetails emailDetails)
    {
        var existingTicket = _context.Ticket.FirstOrDefault(ticket => ticket.MessageId == emailDetails.MessageId);
        // Find the "Date" header
        var dateHeader = emailDetails.Headers.FirstOrDefault(header => header.Key == "Date");
        //Console.WriteLine($"This is create ticket from mail , date test : {dateHeader}");

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
                CreatedAt = Convert.ToDateTime(createdDate).ToString("yyyy-MM-dd HH:mm:ss"),
                //CreatedAt = createdDate.ToString("yyyy-MM-dd HH:mm:ss"),
                UpdatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
                IsEmail = true,
                FromEmail = emailDetails.From.ToString(),
                EmailCc = emailDetails.Cc,
                TicketTypeId = 1,
            };

            // Format CreatedAt property to "yyyy-MM-dd HH:mm:ss"
            //ticket.CreatedAt = Convert.ToDateTime(createdDate).ToString("yyyy-MM-dd HH:mm:ss");

            _context.Ticket.Add(ticket);
            await _context.SaveChangesAsync();

            int newTicketId = ticket.Id;
            var newTarget = new Target
            {
                TicketId = newTicketId,
                DepartmentId = _context.Department.Where(d => d.DepartmentName == "Information Technology").FirstOrDefault().Id,
                UnitId = _context.Unit.Where(u => u.Name == "Corporate Office").FirstOrDefault().Id,
            };

            _context.Target.Add(newTarget);
            await _context.SaveChangesAsync();
        }
        else
        {
            Console.WriteLine($" This Ticket:'{emailDetails.MessageId}'is already exits.");
        }
    }
    // create ticket from frontend form 
    public async void CreateTicket(TicketAndTargetDto ticketAndTargetDto)
    {
        try
        {
            ticketAndTargetDto.CreatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

            var generatedTicketNumber = GenerateTicketNumber();
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

            _context.Ticket.Add(ticketData);
            _context.SaveChanges();

            int newTicketId = ticketData.Id;
            var newTarget = new Target
            {
                TicketId = newTicketId,
                DepartmentId = ticketAndTargetDto.DepartmentId,
                UnitId = ticketAndTargetDto.UnitId,
            };

            _context.Target.Add(newTarget);
            await _context.SaveChangesAsync();



            Console.WriteLine("Create Ticket Successfully.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("This is Service layer error.", ex.Message);

        }
    }

    public async void UpdateTicketstatus(int ticketId , TicketStatus status)
    {
        try {
            var ticketData = _context.Ticket.SingleOrDefault(t => t.Id == ticketId); ;

            ticketData.Status =status;
            await _context.SaveChangesAsync();
            Console.WriteLine("Ticket status update successful.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Ticket status update successfull.");
        }
    }

}