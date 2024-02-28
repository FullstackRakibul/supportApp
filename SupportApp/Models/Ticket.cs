
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
        public string? CreatedBy { get; set; }= string.Empty;
        public string? UpdatedAt { get; set; }

        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public TicketPriority Priority { get; set; } = TicketPriority.Regular;
        
        public int TicketTypeId { get; set; }
        public TicketType? TicketType { get; set; }
       public Target? Target { get; set; }

        public ICollection<Review>? Reviews { get; set; }



        ///////////// addition 
        public string? agentName { get; set; }
        public string? phoneEXT { get; set; }


    }

    public enum TicketPriority
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
        Complete,
        Closed,
        Deleted
    }
}
