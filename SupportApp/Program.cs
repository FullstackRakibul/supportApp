using Microsoft.EntityFrameworkCore;
using SupportApp.Helper;
using SupportApp.Models;
using SupportApp.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using SupportApp.Controllers;
using Microsoft.AspNetCore.Identity;
using SupportApp.Service.Pagination;
using SupportApp.Service.Notifications;
using SupportApp.SignalR;
using SupportApp.Repository.IReposiroty;
using SupportApp.Repository;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//------------------------ Service Extention Register ---------------------
try {
    builder.Services.AddTransientServices();
    builder.Services.AddScopedServices();
    builder.Services.AddSingletonServices();
}
catch(Exception ex) {
    Console.WriteLine(ex);
    throw;
}
// SignalR Hub 
builder.Services.AddSignalR();
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
builder.Services.AddTransient<TicketTypeService, TicketTypeService>();
builder.Services.AddTransient<PaginationService, PaginationService>();


//builder.Services.AddTransient<NotificationService, NotificationService>();

builder.Services.AddScoped<TargetService,TargetService>();
builder.Services.AddScoped<CodeSnippetRepository, CodeSnippetRepository>();
builder.Services.AddTransient<AuthController>();

//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(builders =>
//    {
//        builders.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
        
//    });

//});

builder.Services.AddCors(options =>
	options.AddPolicy("Open", builder => builder.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod().AllowCredentials()));






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
else {
	app.UseSwagger();
	app.UseSwaggerUI();
}

// jwt service
app.UseAuthentication();


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapHub<ReviewHub>("/reviewHub").RequireCors("Open");
app.Run();
