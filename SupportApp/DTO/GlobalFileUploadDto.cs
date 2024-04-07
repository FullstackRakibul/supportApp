namespace SupportApp.DTO
{
	public class GlobalFileUploadDto
	{
		public int? TicketId { get; set; }
		public string? FolderIndex { get; set; }
		public List<IFormFile> UploadFile { get; set; }
		public string? FilePathUrl { get; set; }
	}
}
