using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;


namespace SupportApp.Model
{
    [Index(nameof(Title))]
    [Index(nameof(TicketNumber),IsUnique = true, Name = "Unique_TicketNumber")]
    public class Ticket
    {


        public int Id { get; set; }

        public string TicketNumber { get; set; } = "";

        [Required]
        public string Title { get; set; } = "";

        public string? Description { get; set; }

        public Priority Priority { get; set; }

        public int UserId { get; set; }
        public BaseUser? BaseUser { get; set; }

        public int AgentId { get; set; }
        public Agent? Agent { get; set; }

        public int? ChatId { get; set; }

        public string? Attachment { get; set; }

        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }
    }

    public enum Priority
    { 
        High,
        Low,
        Emergency,
        BusinessClass
    }

    public enum TicketStatus
    {
        Open, 
        InProgress,
        Closed
    }
}
