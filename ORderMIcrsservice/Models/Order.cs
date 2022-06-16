using System;
using System.Collections.Generic;

namespace OrderMicrsService.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string UserId { get; private set; }
        public DateTime OrderPlaced { get; private set; }
        public bool OrderPaid { get; private set; }
        public ICollection<OrderLine> OrderLines { get; private set; }

        public Order(string UserId, List<OrderLine> OrderLines)
        {
            this.UserId = UserId;
            this.OrderPaid = false;
            this.OrderPlaced = DateTime.Now;
            this.OrderLines = OrderLines;
        }
        public Order() 
        {
        
        }
    }
}
