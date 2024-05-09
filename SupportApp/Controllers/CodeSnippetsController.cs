using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SupportApp.DTO;
using SupportApp.Models;
using SupportApp.Repository.IReposiroty;
using static Org.BouncyCastle.Crypto.Engines.SM2Engine;

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

        [HttpGet]
        [Route ("show-code-{id}" , Name ="showCode")]
        public async Task<IActionResult> ShowCode (int id)
        {
            try {
                var getCodeData = await _codeSnippetInterface.GetCodeAsync(id);

                if(getCodeData == null)
                {
                    return Ok(new ApiResponseDto<CodeSnippet>
                    {
                        Status = false,
                        Message = "Code Not Found",
                        Data = getCodeData
                    });
                }
                else
                {
                    return Ok(new ApiResponseDto<CodeSnippet>
                    {
                        Status = true,
                        Message = "Code data retrieved successfully",
                        Data = getCodeData
                    });
                }
            }
            catch(Exception ex) { 
                return BadRequest(ex.Message);
            }
        }
    }
}
