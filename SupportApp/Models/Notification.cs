namespace SupportApp.Models;


public class Notification
{

    public int Id { get; set; }
    public byte Status { get; set; } = 1;
    public string? Message { get; set; }

    public ICollection<Target> Targets { get; set; } = new List<Target>();
}