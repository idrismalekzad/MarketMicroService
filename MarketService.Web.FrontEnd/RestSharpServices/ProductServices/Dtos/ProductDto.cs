namespace MarketService.Web.FrontEnd.Services.ProductServices.Dtos
{
    public class ProductDto
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public object image { get; set; }
        public int price { get; set; }
        public ProductCategoryDto ProductCategory { get; set; }
    }
}
