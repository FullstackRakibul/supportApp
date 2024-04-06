using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Packaging.Signing;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Service;
using System.Net.Mail;

namespace SupportApp.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FileUploadController : ControllerBase
	{
		private readonly SupportAppDbContext _context;
		private readonly GlobalFileUploadService _globalFileUploadService;

		public FileUploadController (SupportAppDbContext context, GlobalFileUploadService globalFileUploadService)
		{
			_context = context;
			_globalFileUploadService = globalFileUploadService;
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
		public ActionResult Create([FromBody] GlobalFileUploadDto globalFileUploadDto )
		{
			try {
				return Ok("This is a Service Test");
			}catch(Exception ex) {
				return BadRequest("service is not working. . .");
			}

			//return Ok("File Upload Successfully...");
		}

	}
}
