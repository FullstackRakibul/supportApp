using Microsoft.EntityFrameworkCore;
using SupportApp.Helper;
using SupportApp.Models;
using SupportApp.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using SupportApp.Controllers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// register email setting
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));

// register interface 
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddTransient<EmailBoxService, EmailBoxService>();
builder.Services.AddTransient<TicketService , TicketService>();
builder.Services.AddScoped<TargetService,TargetService>();

builder.Services.AddTransient<AuthController>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builders =>
    {
        builders.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});

// config Dependency Injection
builder.Services.AddDbContext<SupportAppDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultDatabase")));

// Add JWT servcices
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });


// JWT 
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("ApiSettings:JwtOptions"));


var app = builder.Build();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// jwt service
app.UseAuthentication();


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
