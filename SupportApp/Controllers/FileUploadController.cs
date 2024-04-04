using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SupportApp.DTO;
using SupportApp.Models;
using System.Net.Mail;

namespace SupportApp.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FileUploadController : ControllerBase
	{
		private readonly SupportAppDbContext _context;

		public FileUploadController (SupportAppDbContext context)
		{
			_context = context;
		}

		[HttpGet]
		public ActionResult Index()
		{
			try{
				return Ok("This controller is working Fine.");
				//Attachment handling(assuming attachment object exists in ticketAndTargetDto)

				//		 if (ticketAndTargetDto.Attachment != null)
				//{
				//	// Extract attachment information
				//	var attachment = ticketAndTargetDto.Attachment;
				//	string fileName = ticketAndTargetDto.Attachment.ToString();


				//	var projectRootPath = Path.Combine(Directory.GetCurrentDirectory());
				//	string folderPath = Path.Combine(projectRootPath, "UploadMedia");

				//	if (!Directory.Exists(folderPath))
				//	{
				//		Directory.CreateDirectory(folderPath);
				//	}

				//	// Combine folder path and filename
				//	string filePath = Path.Combine(folderPath, fileName);
				//	ticketData.Attachment = filePath;

			}catch(Exception ex) {
					Console.WriteLine(ex.ToString());
				return BadRequest(ex.ToString());
				}
			
		}

		[HttpPost]
		public ActionResult Create()
		{
			return Ok("Success");
		}

	}
}
