using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace SupportApp.Models;

public class Department
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int DepartmentName { get; set; }

    public int? DepartmentCategoryId { get; set; }

    [MaxLength(255)]
    public string Note { get; set; }

    public byte Status { get; set; } = 1;

    [Required]
    public int TicketTypeId { get; set; }

    [ForeignKey("TicketTypeId")]
    public TicketType TicketType { get; set; }
}