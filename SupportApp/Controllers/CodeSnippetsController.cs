using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupportApp.DTO;
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
        public  IActionResult GetAllCodes()
        {
            var codeSnippet =  _codeSnippetInterface.GetAllAsync();
            if (codeSnippet == null)
            {
                return NotFound();
            }
            return Ok(codeSnippet);
        }
    }
}
