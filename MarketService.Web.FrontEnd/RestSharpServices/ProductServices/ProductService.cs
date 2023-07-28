using MarketService.Web.FrontEnd.Services.ProductServices.Dtos;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace MarketService.Web.FrontEnd.Services.ProductServices
{
    public class ProductService : IProductService
    {
        private readonly RestClient restClient;
        public ProductService(RestClient restClient)
        {
            this.restClient = restClient;
        }

        public IEnumerable<ProductDto> GetAllProduct()
        {
            var request = new RestRequest("/api/Product", Method.Get);
            var response = restClient.Execute(request);
            Console.WriteLine(response.Content);
            var products = JsonSerializer.Deserialize<List<ProductDto>>(response.Content);
            return products;
        }

        public ProductDto Getproduct(Guid Id)
        {
            var request = new RestRequest($"/api/Product/{Id}", Method.Get);

            var response = restClient.Execute(request);

            var product = JsonSerializer.Deserialize<ProductDto>(response.Content);
            return product;
        }
    }
}
