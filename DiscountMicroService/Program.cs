using DiscountMicroService.Infrastructure.Context;
using DiscountMicroService.Infrastructure.MappingProfile;
using DiscountMicroService.Service.Implementation;
using DiscountMicroService.Service.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

var Configuration = builder.Configuration;

// This method gets called by the runtime. Use this method to add services to the container.

builder.Services.AddControllers();

builder.Services.AddTransient<IDsicountService, DiscountService>();

builder.Services.AddDbContext<DiscountDataBaseDontext>(o => o.UseSqlServer(Configuration["DiscountConnection"]));

builder.Services.AddAutoMapper(typeof(DiscountMappingProfile));


// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();