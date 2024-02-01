﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SupportApp.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace SupportApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly SupportAppDbContext _dbContext;


        public AuthController(IConfiguration configuration , SupportAppDbContext dbContext)
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
                .FirstOrDefault(a => a.Username == agent.Username && a.Password == agent.Password);

            if (userFromDb != null)
            {
                _agent = new Agent
                {
                    Username = userFromDb.Username,

                };
            }

            return _agent;
        }


        private string GenerateTokenAgent(Agent agent)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
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
                response = Ok(new
                {
                    token = token,
                });
            }
            return response;
        }
    }
}
