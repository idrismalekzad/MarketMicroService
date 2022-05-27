using System;

namespace MarketMicroService.DtoObjects
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public ProductCategoryDto productCategory { get; set; }
    }
}
