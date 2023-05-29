using LCA.Models;
using LCA.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Services
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<ChatService>();

// MongoDB Config Init
builder.Services.Configure<LCADatabaseSettings>(
  builder.Configuration.GetSection("MongoDatabase")
);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseWebSockets();

app.Run();
