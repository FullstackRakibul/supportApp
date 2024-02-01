using SupportApp.Models;

namespace SupportApp.DTO
{
    public class UpdateTicketStatusDto
    {
        public int Id { get; set; }
        public TicketStatus Status { get; set; }
        public TicketPriority Priority { get; set; }

    }
}
