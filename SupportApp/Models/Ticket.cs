
using System.Runtime.Serialization;

namespace SupportApp.Models
{
    public class Ticket
    {

        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string TicketNumber { get; set; } = string.Empty;
        public string MessageId { get; set; } = string.Empty;
        public int? UserId { get; set; }
        public string? Attachment { get; set; }
        public bool? IsEmail { get; set; }
        public string? FromEmail { get; set; }
        public string? EmailCc { get; set; }
        public int? UpdatedBy { get; set; }

        public string? CreatedAt { get; set; }
        public string? UpdatedAt { get; set; }

        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public Priority Priority { get; set; } = Priority.Regular;
        
        public int TicketTypeId { get; set; }
        public TicketType? TicketType { get; set; }
       public Target? Target { get; set; }

        public ICollection<Review>? Reviews { get; set; }
        

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
        Open,
        Acknowledged,
        InProgress,
        Closed,
        Complete,
        Deleted
    }
}
