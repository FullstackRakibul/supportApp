using MimeKit.Encodings;

namespace SupportApp.Models
{
	public class GlobalFileUpload
	{
		public int Id { get; set; }
		public int TicketId { get; set; }
		public string FolderIndex { get; set; }
		public bool IsActive { get; set; }=true;
		public DateTime? UpdatedAt { get; set; } // Nullable for updates
		public string FilePathUrl { get; set; }
		public Ticket Ticket { get; set; } 
	}
}
