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
        private readonly EmailBoxService _emailBoxService;


        public EmailController(IEmailService service , EmailBoxService emailBoxService)
        {
            _emailService = service;
            _emailBoxService = emailBoxService;
        }

        [HttpPost("SendMail")]
        public async Task<IActionResult> SendMail() {
            try {
                var mailrequest = new Mailrequest();
                mailrequest.ToEmail = "it@dhakawestern.com";
                mailrequest.Subject = "Fetch Data test";
                mailrequest.Body = "This is a test mail body for fetch data";
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

        [HttpPost("ComposeMail")]
        public async Task<IActionResult> ComposeMail([FromBody] Mailrequest mailRequest)
        {
            try
            {
                if (mailRequest != null && _emailService != null)
                {
                    await _emailService.SendEmailAsync(mailRequest);
                    return Ok("Mail send successfully.");
                }
                else
                {
                    return BadRequest("Mail send failed !!");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet("GetMails")]
        public IActionResult GetMails()
        {
            try
            {
                var emailDetailsList = _emailBoxService.GetEmailDetails();
                return Ok(emailDetailsList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
