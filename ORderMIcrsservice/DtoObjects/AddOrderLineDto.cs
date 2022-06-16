using System;

namespace OrderMicrsService.DtoObjects
{
    public class AddOrderLineDto
    {
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public int Quantity { get; set; }
    }
}
