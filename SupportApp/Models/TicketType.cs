using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace SupportApp.Models;

public class TicketType
{
    [Key]
    public int Id { get; set; }
    [Required]
    [MaxLength(255)]
    public string TypeName { get; set; }

    [Required]
    public byte Status { get; set; } = 1;
}