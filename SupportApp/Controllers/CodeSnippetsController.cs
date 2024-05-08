using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodeSnippetsController : Controller
    {


        private readonly ICodeSnippetInterface _codeSnippetInterface;

        public CodeSnippetsController(ICodeSnippetInterface codeSnippetInterface)
        {
            _codeSnippetInterface = codeSnippetInterface;
        }

        [HttpGet]
        [Route("get-all-code", Name = "getAllCode")]
        public async Task<IActionResult> GetAllCodes()
        {
            var codeSnippet = await _codeSnippetInterface.GetAllAsync();
            if (codeSnippet == null)
            {
                return NotFound();
            }
            return Ok( new ApiResponseDto<IEnumerable<CodeSnippet>>
            {
                Status=true,
                Message="Getting all code's data successfully .",
                Data=codeSnippet
            });
        }
    }
}
