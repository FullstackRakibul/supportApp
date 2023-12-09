using Microsoft.EntityFrameworkCore;
using SupportApp.Helper;
using SupportApp.Models;
using SupportApp.Service;

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
builder.Services.AddTransient<EmailBoxServcie, EmailBoxServcie>();
builder.Services.AddTransient<TicketService , TicketService>();



// config Dependency Injection

builder.Services.AddDbContext<SupportAppDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultDatabase")));

var app = builder.Build();

app.UseCors(c => c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
