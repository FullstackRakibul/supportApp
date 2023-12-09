using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using SupportApp.Models;

namespace SupportApp.Models
{
    public class Agent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AgentId { get; set; }

        public string Name { get; set; } = "";
        [Required]
        public string EmpCode { get; set; } = "";

        public string? Email { get; set; }

        public string? Mobile { get; set; }

        public string? PhoneExtension { get; set; }

        public AgentStatus Status { get; set; } = AgentStatus.Available;

        public string? Username { get; set; }

        public string? Password { get; set; }

        // Navigation property for tickets associated with this user
        public ICollection<Ticket>? Tickets { get; set; }
    }

    public enum AgentStatus {
        Available,
        Busy,
        Offline,
        WeekendOff
    }
}
