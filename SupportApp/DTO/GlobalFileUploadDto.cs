using System.ComponentModel.DataAnnotations;

namespace SupportApp.DTO
{
	public class GlobalFileUploadDto
	{
		public int? TicketId { get; set; }
		public string? FolderIndex { get; set; }

        [Required(ErrorMessage = "Please select a file.")]
        public IFormFile UploadedFile { get; set; }

        //public List<IFormFile> UploadFile { get; set; }
        public string? FilePathUrl { get; set; }
	}
}
