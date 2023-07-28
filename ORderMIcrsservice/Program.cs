using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OrderMicrsService.Infrasttructure.Context;
using OrderMicrsService.Service.Implemetions;
using OrderMicrsService.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


var builder = WebApplication.CreateBuilder(args);

var Configuration = builder.Configuration;


builder.Services.AddControllers();

builder.Services.AddControllers();

builder.Services.AddDbContext<OrderDataBaseContext>(o => o.UseSqlServer
    (Configuration["OrderConnection"]));


builder.Services.AddTransient<IOrderService, OrderService>();


// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();


