using System;

namespace OrderMicrsService.DtoObjects
{
    public class OrderLineDto
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public int Quantity { get; set; }
    }
}
