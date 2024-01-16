namespace SupportApp.Models
{
    public class Unit
    {
        public int Id { get; set; }
        public string Name { get; set; }= string.Empty;
        public string Address { get; set; } = string.Empty;
        public bool Status { get; set; }

        public ICollection<Target> Targets { get; set; } = new List<Target>();
    }
}
