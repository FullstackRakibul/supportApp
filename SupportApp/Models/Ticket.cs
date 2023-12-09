using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using SupportApp.Models;


namespace SupportApp.Models
{
    [Index(nameof(Title))]
    [Index(nameof(TicketNumber),IsUnique = true, Name = "Unique_TicketNumber")]
    public class Ticket
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string TicketNumber { get; set; } = "";
        [Required]
        public string MessageId { get; set; } = "";

        [Required]
        public string Title { get; set; } = "";

        public string? Description { get; set; }

        public Priority Priority { get; set; }

        public int? UserId { get; set; }
        public BaseUser? BaseUser { get; set; }
    
        public int? AgentId { get; set; }
        public Agent? Agent { get; set; }

        public int? ChatId { get; set; }

        public string? Attachment { get; set; }

        public TicketStatus Status { get; set; } = TicketStatus.Acknowledged;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }
    }

    public enum Priority
    { 
        Regular,
        Standard,
        Emergency,
        BusinessClass
    }

    public enum TicketStatus
    {
        Acknowledged,
        InProgress,
        Closed
    }
}
