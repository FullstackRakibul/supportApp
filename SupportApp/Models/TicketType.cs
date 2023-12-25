

namespace SupportApp.Models;

public class TicketType
{
    public int Id { get; set; }
    public string TypeName { get; set; } = String.Empty;
    public byte Status { get; set; } = 1;
    public int DepartmentId { get; set; }
    public Department Department { get; set; } = new Department();

    public ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}