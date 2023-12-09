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
        private readonly IEmailService _emailService;
        private readonly EmailBoxServcie _emailBoxServcie;


        public EmailController(IEmailService service , EmailBoxServcie emailBoxServcie)
        {
            _emailService = service;
            _emailBoxServcie = emailBoxServcie;
        }

        [HttpPost("sendMail")]
        public async Task<IActionResult> SendMail() {
            try {
                var mailrequest = new Mailrequest();
                mailrequest.ToEmail = "it@dhakawestern.com";
                mailrequest.Subject = "Test mail 01";
                mailrequest.Body = "This is a test mail body";
                if (_emailService != null)
                {
                    await _emailService.SendEmailAsync(mailrequest);
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

        [HttpGet("GetMails")]
        public IActionResult GetMails()
        {
            try
            {
                var emailDetailsList = _emailBoxServcie.GetEmailDetails();
                return Ok(emailDetailsList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
