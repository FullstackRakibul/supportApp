
namespace SupportApp.Models;

public class Department
{
    public int Id { get; set; }
    public int DepartmentName { get; set; }
    public int? DepartmentCategoryId { get; set; }
    public string? Note { get; set; }
    public byte Status { get; set; } = 1;

    public ICollection<TicketType> TicketTypes { get; set; } = new List<TicketType>();
}