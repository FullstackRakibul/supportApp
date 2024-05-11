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

        [HttpGet]
        [Route ("show-code-{id}" , Name ="showCode")]
        public async Task<IActionResult> ShowCodeSnippet(int id)
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


        [HttpPost("create-code-snippet")]
        public async Task<IActionResult> CreateCodeSnippet([FromBody] CodeSnippetDto codeSnippetDto)
        {
            try
            {
                var responseCreateCodeSnippet = await _codeSnippetInterface.CreateCodeSnippet(codeSnippetDto);

                return Ok(new ApiResponseDto<string>
                {
                    Status = true,
                    Message = "CodeSnippet created successfully",
                    Data = responseCreateCodeSnippet
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("update-code-snippet-{id}")]
        public async Task<IActionResult> UpdateCodeSnippet(CodeSnippetDto codeSnippetDto)
        {
            try
            {
                var updateData = await _codeSnippetInterface.UpdateCodeSnippetAsync(codeSnippetDto);
                if( updateData != null)
                {
                    return Ok(new ApiResponseDto<string>
                    {
                        Status = true,
                        Message = "CodeSnippet update successfully.",
                        Data = updateData
                    });
                }
                else
                {
                    return BadRequest("Resource not found !!!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete-code-snippet-{id}")]
        public async Task<IActionResult> DeleteCodeSnippet(int id)
        {
            try
            {
                var deleteResponse = await _codeSnippetInterface.DeleteCodeSnippet(id);

                return Ok(new ApiResponseDto<string>
                {
                    Status = true,
                    Message = "CodeSnippet deleted successfully.",
                    Data = deleteResponse
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
