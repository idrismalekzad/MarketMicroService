using MarketMicroService.Infrastructure;
using MarketMicroService.Services.Implimentation;
using MarketMicroService.Services.Intefaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


var builder = WebApplication.CreateBuilder(args);

var Configuration = builder.Configuration;

// This method gets called by the runtime. Use this method to add services to the container.

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "MarketMicroService", Version = "v1" });
});

builder.Services.AddDbContext<ProductDatabaseContext>(p =>
                         p.UseSqlServer(Configuration["ProductConnection"]));

builder.Services.AddScoped<IProductService, ProductServices>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dataContext = scope.ServiceProvider.GetRequiredService<ProductDatabaseContext>();
    dataContext.Database.Migrate();

}

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProductService v1"));
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();