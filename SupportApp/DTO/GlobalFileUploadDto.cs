namespace SupportApp.DTO
{
	public class GlobalFileUploadDto
	{
		public int Id { get; set; }
		public int? TicketId { get; set; }
		public string? FolderIndex { get; set; }
		public bool? IsActive { get; set; }
		public DateTime? CreatedAt { get; set; }
		public DateTime? UpdatedAt { get; set; }
		public string? FilePathUrl { get; set; }
	}
}
