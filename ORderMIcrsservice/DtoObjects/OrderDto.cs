using System;
using System.Collections.Generic;

namespace OrderMicrsService.DtoObjects
{
    public class OrderDto
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public bool OrderPaid { get; set; }
        public DateTime OrderPlaced { get; set; }
        public List<OrderLineDto> OrderLines { get; set; }

    }
}
