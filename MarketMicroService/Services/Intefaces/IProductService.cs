using MarketMicroService.DtoObjects;
using System;
using System.Collections.Generic;

namespace MarketMicroService.Services.Intefaces
{
    public interface IProductService
    {
        List<ProductDto> GetProductList();
        ProductDto GetProduct(Guid Id);
        void AddNewProduct(AddNewProductDto addNewProduct);
    }
}
