using BasketMicroService.Service.Interfaces;
using BasketService.Infrastructure.Contexts;
using BasketService.Infrastructure.MappingProfile;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;


var builder = WebApplication.CreateBuilder(args);

var configuration = builder.Configuration;

// This method gets called by the runtime. Use this method to add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "BasketService", Version = "v1" });
});
builder.Services.AddDbContext<BasketDataBaseContext>(o => o.UseSqlServer
(configuration["BasketConnection"]));

builder.Services.AddAutoMapper(typeof(BasketMappingProfile));

builder.Services.AddTransient<IBasketService, BasketMicroService.Service.Implemention.BasketService>();

// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<BasketDataBaseContext>();
    dataContext.Database.Migrate();

}

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();