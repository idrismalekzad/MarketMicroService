using MarketService.Web.FrontEnd.Services.ProductServices;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MarketService.Web.FrontEnd.Controllers.Mvc
{
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
                _productService = productService;
        }

        public IActionResult GetAll()
        {
             var rtn = _productService.GetAllProduct();
            return View(rtn);
        }
    }
}
