namespace SupportApp.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Notification
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int TargetId { get; set; }

    [Required]
    public byte Active { get; set; } = 1;

    [MaxLength(255)]
    public string Message { get; set; }

    [ForeignKey("TargetId")]
    public Target Target { get; set; }
}