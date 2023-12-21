namespace SupportApp.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Review
{
    [Key]
    public int Id { get; set; }
    
    public int TargetId { get; set; }

    [Required]
    public int TicketId { get; set; }

    [Required]
    public int ReviewUserId { get; set; }

    [Required]
    [MaxLength(255)]
    public string ReviewNote { get; set; }
    
    public byte Status { get; set; } = 1;

    [ForeignKey("TicketId")]
    public Ticket Ticket { get; set; }

    [ForeignKey("TargetId")]
    public Target Target { get; set; }
}