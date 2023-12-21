namespace SupportApp.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Target
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int TicketId { get; set; }
    
    public int AgentId { get; set; }

    [Required]
    public int DepartmentId { get; set; }

    [MaxLength(255)]
    public string Objective { get; set; }

    [ForeignKey("TicketId")]
    public Ticket Ticket { get; set; }

    [ForeignKey("AgentId")]
    public BaseUser Agent { get; set; }

    [ForeignKey("DepartmentId")]
    public Department Department { get; set; }
}