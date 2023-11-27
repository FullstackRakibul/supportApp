using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SupportApp.Helper;
using SupportApp.Service;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService emailService;


        public EmailController(IEmailService service)
        {
            this.emailService = service;
        }

        [HttpPost("sendMail")]
        public async Task<IActionResult> SendMail() {
            try {
                var mailrequest = new Mailrequest();
                mailrequest.ToEmail = "it@dhakawestern.com";
                mailrequest.Subject = "Test mail 01";

                mailrequest.Body = "<body style=\"font-family: Arial, sans-serif; text-align: center; background-color: #d8d8d8; margin: 0; padding: 0;\">\r\n\r\n    <table style=\" box-shadow: 5px 5px #274358; max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\">\r\n        <tr style=\"background-color: #274358; color: #fff; padding: 20px;\">\r\n            <td >\r\n                <h1 style=\"font-weight: 600;font-family:Verdana, sans-serif;\">Happy Birthday!</h1>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td style=\"padding: 20px;\">\r\n                <p style=\"font-size: 16px; font-weight: 600; color: #274358;\">Dear'+ @employeeName+',</p>\r\n                <p>Wishing you a day filled with love, joy, and all your heart desires. May this year bring you closer to your dreams and aspirations.</p>\r\n                <p>Enjoy your special day to the fullest!</p>\r\n                <img src=\"https://media.istockphoto.com/id/1127446391/vector/paper-art-of-happy-birthday-calligraphy-hand-lettering-hanging-with-colorful-balloon.jpg?s=612x612&w=0&k=20&c=c-ymBtmkmhwns95pMKmpwTk1NwlCMzZcuSH9hz1KT2o=\" alt=\"Birthday Greetings Image\" style=\"max-width: 100%; height: auto;\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td style=\"background-color: #f1f1f1; color: #274358; padding: 20px;\">\r\n                <p style=\"font-weight: 600;\">Best Wishes,</p>\r\n                <img src=\"https://textilepages.com/public/profile/1593836298-img1-logo.png\" width=\"120\" height=\"80\" />\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</body>";

                if (emailService != null)
                {
                    await emailService.SendEmailAsync(mailrequest);
                    return Ok();
                }
                else {
                    return BadRequest("a Bad request");
                }
            }
            catch (Exception ex) {
                Console.WriteLine(ex);
                throw;
            }
        }
    }
}
