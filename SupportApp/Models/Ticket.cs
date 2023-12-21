using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SupportApp.Models;


namespace SupportApp.Models
{
    [Microsoft.EntityFrameworkCore.Index(nameof(Title))]
    [Microsoft.EntityFrameworkCore.Index(nameof(MessageId))]
    [Microsoft.EntityFrameworkCore.Index(nameof(TicketNumber),IsUnique = true, Name = "Unique_TicketNumber")]
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public string TicketNumber { get; set; } = "";
        public string MessageId { get; set; } = "";
        [Required]
        public string Title { get; set; } = "";
        [Required] public string? Description { get; set; } = "";
        public Priority Priority { get; set; } = Priority.Regular;
        public int? UserId { get; set; }
        public BaseUser? BaseUser { get; set; }
        public int? AgentId { get; set; }
        public Agent? Agent { get; set; }
        public int? ChatId { get; set; }
        public string? Attachment { get; set; }
        public bool? IsEmail { get; set; }
        public string? FromEmail { get; set; }
        public string? EmailCc { get; set; }
        public TicketStatus Status { get; set; } = TicketStatus.Open;
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? UpdatedBy { get; set; }

        [Required]
        public int TicketTypeId { get; set; }
        
        [ForeignKey("TicketTypeId")]
        public TicketType TicketType { get; set; }
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
        Deleted
    }
}
