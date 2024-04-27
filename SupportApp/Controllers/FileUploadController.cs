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

                //Attachment handling(assuming attachment object exists in ticketAndTargetDto)

                //if (ticketAndTargetDto.Attachment != null)
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

                return Ok("This controller is working Fine.");

            }
            catch(Exception ex) {
					Console.WriteLine(ex.ToString());
				return BadRequest(ex.ToString());
				}
			
		}

		[HttpPost]
		public ActionResult Create([FromBody] GlobalFileUploadDto globalFileUploadDto , IFormFile formFile)
		{
			try {

				string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", globalFileUploadDto.FilePathUrl);
				Directory.CreateDirectory(Path.GetDirectoryName(path));

				//using (Stream stream = new FileStream(path, FileMode.Create))
				//{
				//	globalFileUploadDto.UploadedFile.CopyTo(stream);
				//}

				return Ok("Upload File saved success...");

			}catch(Exception ex) {
				return BadRequest("service is not working ...");
			}
		}

	}
}





//[HttpPost]
//public IActionResult Upload(SingleFileModel model)
//{
//    if (ModelState.IsValid)
//    {
//        model.IsResponse = true;

//        string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Files");

//        //create folder if not exist
//        if (!Directory.Exists(path))
//            Directory.CreateDirectory(path);

//        //get file extension
//        FileInfo fileInfo = new FileInfo(model.File.FileName);
//        string fileName = model.FileName + fileInfo.Extension;

//        string fileNameWithPath = Path.Combine(path, fileName);

//        using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
//        {
//            model.File.CopyTo(stream);
//        }
//        model.IsSuccess = true;
//        model.Message = "File upload successfully";
//    }
//    return View("Index", model);
//}