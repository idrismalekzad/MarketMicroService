using MarketService.Web.FrontEnd.Services.ProductServices.Dtos;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace MarketService.Web.FrontEnd.Services.ProductServices
{
    public interface IProductService
    {
        IEnumerable<ProductDto> GetAllProduct();
        ProductDto Getproduct(Guid Id);
    }

    


   
}
