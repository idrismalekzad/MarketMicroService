using Market.AService.UI.RestSharpServices.BasketSercvices;
using Market.AService.UI.RestSharpServices.DiscontServices;
using MarketService.Web.FrontEnd.Services.ProductServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RestSharp;
using System;

var builder = WebApplication.CreateBuilder(args);
var mvcBuilder = builder.Services.AddRazorPages();

var Configuration = builder.Configuration;

// This method gets called by the runtime. Use this method to add services to the container.

builder.Services.AddControllersWithViews();

if (builder.Environment.IsDevelopment())
    mvcBuilder.AddRazorRuntimeCompilation();

builder.Services.AddScoped<IProductService>(p =>
{
    return new ProductService(
        new RestClient(Configuration["MicroservicAddress:Product:uri"]));
});

builder.Services.AddScoped<IBasketService>(p =>
{
	return new BasketService(
		new RestClient(Configuration["MicroservicAddress:Basket:uri"]));
});

builder.Services.AddScoped<IDiscountService, DiscountService>();

var app = builder.Build();
// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
