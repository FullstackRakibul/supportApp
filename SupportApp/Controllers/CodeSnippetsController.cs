using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodeSnippetsController : Controller
    {
        private readonly ICodeSnippetInterface _codeSnippetInterface;

        [HttpGet]
        [Route("get-all-code", Name = "getAllCode")]
        public async Task<IActionResult> GetAllCodes()
        {
            var codeSnippet = await _codeSnippetInterface.GetAllAsync();
            if (codeSnippet == null)
            {
                return NotFound();
            }
            return Ok("Controller Works");
        }
    }
}
