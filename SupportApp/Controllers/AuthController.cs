using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Crypto.Generators;
using SupportApp.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;
using BCrypt.Net;
using SupportApp.DTO;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly SupportAppDbContext _dbContext;



        public AuthController(IConfiguration configuration , SupportAppDbContext dbContext )
        {
            _config = configuration;
            _dbContext = dbContext;

        }

        


        private BaseUser AuthenticateUser(BaseUser baseUser) {
            BaseUser _baseUser = null;
            var userFromDb = _dbContext.BaseUser
                .FirstOrDefault(u => u.Username == baseUser.Username && u.Password == baseUser.Password);

            if (userFromDb != null)
            {
                _baseUser = new BaseUser
                {
                    Username = userFromDb.Username,
                    // Add other properties if needed
                };
            }

            return _baseUser;
        }

        private string GenerateToken(BaseUser baseUser) {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], null, expires: DateTime.Now.AddMinutes(3), signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult SignIn(BaseUser baseUser) { 
            IActionResult response = Unauthorized();
            var baseUser_ = AuthenticateUser(baseUser);
            if (baseUser_ != null) { 
                var token = GenerateToken(baseUser_);
                response = Ok(new {
                    token = token,
                    
                });
            }   
            return response;
        }





        private Agent AuthenticateUser(Agent agent)
        {
            Agent _agent = null;
            var userFromDb = _dbContext.Agent
         .FirstOrDefault(a => a.Username == agent.Username);

            if (userFromDb != null && BCrypt.Net.BCrypt.Verify(agent.Password, userFromDb.Password))
            {
                _agent = new Agent
                {
                    Username = userFromDb.Username,
                    role = userFromDb.role,
                    PhoneExtension = userFromDb.PhoneExtension,
                };

            }
            

            return _agent;
        }


        private string GenerateTokenAgent(Agent agent)
        {
            //var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            //var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your-strong-key-with-at-least-16-bytes"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], null, expires: DateTime.Now.AddMinutes(3), signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }



        [AllowAnonymous]
        [HttpPost("agent")]
        public IActionResult AgentSignIn(Agent agent)
        {
            IActionResult response = Unauthorized();
            var _agent = AuthenticateUser(agent);


            if (_agent != null)
            {
                var token = GenerateTokenAgent(_agent);
                var agentData = _dbContext.Agent.FirstOrDefault(a => a.Username == _agent.Username);

                response = Ok(new
                {
                    token = token,
                    agentdata = agentData,
                    isSuccess = true
                });
            }
            return response;
        }

       // [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> AdminRegister([FromBody] AgentRegistrationDto agentRegistrationDto)
        {
            //try {

            //    var agentUser = new Agent
            //    {
            //        Username = agentRegistrationDto.Username,
            //        Email = agentRegistrationDto.Email,
            //        EmpCode = agentRegistrationDto.EmpCode,
            //        PhoneExtension = agentRegistrationDto.PhoneExtension,
            //        Password = BCrypt.Net.BCrypt.HashPassword(agentRegistrationDto.Password),
            //    };

            //    var result =  _dbContext.AddAsync(agentUser);

            //        return Ok(result);

            //}catch (Exception ex) { 
            //    Console.WriteLine(ex.ToString());
            //    return BadRequest(ex.Message);
            //}



            try
            {
                //var existingUser = await _dbContext.Agent.FindAsync(agent.Username);
                //if (existingUser != null)
                //{
                //    return BadRequest("Username already exists.");
                //}

                var agentUser = new Agent
                {
                    Username = agentRegistrationDto.Username,
                    Email = agentRegistrationDto.Email,
                    EmpCode = agentRegistrationDto.EmpCode,
                    PhoneExtension = agentRegistrationDto.PhoneExtension,
                    Password = BCrypt.Net.BCrypt.HashPassword(agentRegistrationDto.Password),
                };

                await _dbContext.AddAsync(agentUser);
                await _dbContext.SaveChangesAsync();

                return Ok("Registration successful.");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return BadRequest("Registration failed.");
            }
        }
    }
}
