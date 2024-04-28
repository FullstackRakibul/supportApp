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
		public ActionResult Create([FromForm] GlobalFileUploadDto globalFileUploadDto )
		{
			try {
                if (globalFileUploadDto == null || globalFileUploadDto.UploadedFile == null)
                {
                    return BadRequest("No file uploaded.");
                }

                
                //root path for the uploaded file
                string wwwrootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
                //create folder if not exist
                if (!Directory.Exists(wwwrootPath)) { 
                    Directory.CreateDirectory(wwwrootPath);
                }

                string folderPath = Path.Combine(wwwrootPath, globalFileUploadDto.FilePathUrl ?? "uploads");
                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }


                // Get original file name and extension
                string originalFileName = globalFileUploadDto.UploadedFile.FileName;
                string fileExtension = Path.GetExtension(originalFileName);

                // Create custom file name with prefix, datetime, and postfix
                Random random = new Random();
                int randomNumber = random.Next(1000, 9999); // Change range as needed
                string customFileName = $"supportApp_{DateTime.Now:yyyyMMddHHmmssfff}_{randomNumber}{fileExtension}";

                // Construct full file path
                string filePath = Path.Combine(folderPath, customFileName);

                // Save the uploaded file to the specified path
                using (Stream stream = new FileStream(filePath, FileMode.Create))
                {
                    globalFileUploadDto.UploadedFile.CopyTo(stream);
                }

                return Ok("Upload File saved success...?");

			}catch(Exception ex) {
                Console.WriteLine($"Error occurred while saving file: {ex.Message}");
                return BadRequest("Failed to save the uploaded file.");
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













 //if (globalFileUploadDto == null || globalFileUploadDto.UploadedFile == null)
 //               {
 //                   return BadRequest("No file uploaded.");
 //               }

 //               //string targetDirectory = "uploads"; 
 //               //string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", targetDirectory);


 //               //string folderName = globalFileUploadDto.FilePathUrl ?? "defaultUpload"; 
 //               //string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", folderName);


 //               string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/");
 //               //create folder if not exist
 //               if (!Directory.Exists(path)) { 
 //                   Directory.CreateDirectory(path);
 //               }

 //               //get file extension
 //               FileInfo fileInfo = new FileInfo(globalFileUploadDto.UploadedFile.FileName);
 //               string fileName = globalFileUploadDto.UploadedFile + fileInfo.Extension;


 //               Directory.CreateDirectory(path);

 //               string originalFileName = globalFileUploadDto.UploadedFile.FileName;
 //               string filePath = Path.Combine(path, originalFileName);

 //               string fileNameWithPath = Path.Combine(path, fileName);

 //               //using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
 //               //{
 //               //    globalFileUploadDto.UploadedFile.CopyTo(stream);
 //               //}



 //               using (Stream stream = new FileStream(fileNameWithPath, FileMode.Create))
 //               {
 //                   globalFileUploadDto.UploadedFile.CopyTo(stream);
 //               }

 //               return Ok("Upload File saved success...?");



//}