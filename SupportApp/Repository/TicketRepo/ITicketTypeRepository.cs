using SupportApp.Models;
namespace SupportApp.Repository.Ticket
{
    public interface ITicketTypeRepository

    {
        Task CreateTicketTypeAsync(TicketType ticketType);
    }
}
