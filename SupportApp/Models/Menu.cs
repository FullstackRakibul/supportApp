using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupportApp.Models
{
    public class Menu
    {
        [Key]
        public int Id { get; set; }
        public int? ModuleId { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public string? Icon { get; set; }
        public string Url { get; set; }
        public int? ParentId { get; set; }
        public DateTime CreatedAt { get; set; }
        [ForeignKey("AgentId")]
        public int? CreatedBy { get; set; }
        public DateTime? UpdatedAt { get; set;}
        [ForeignKey("AgentId")]
        public int? UpdatedBy { get; set;}

    }
}
