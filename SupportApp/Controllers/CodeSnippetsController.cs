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

        [HttpGet("getAllCode")]
        public ActionResult Index()
        {
            var codeSnippet = _codeSnippetInterface.GetAllAsync();
            return View(codeSnippet);
        }
    }
}
