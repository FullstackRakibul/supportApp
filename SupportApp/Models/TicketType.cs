namespace SupportApp.Models;

public class TicketType
{
    public int Id { get; set; }
    public string TypeName { get; set; } = String.Empty;
    public byte Status { get; set; } = 1;


    public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}