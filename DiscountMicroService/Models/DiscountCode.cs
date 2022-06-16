using System;

namespace DiscountMicroService.Models
{
    public class DiscountCode
    {
        public Guid ID { get; set; }
        public int Amount { get; set; }
        public string Code { get; set; }
        public bool Used { get; set; }
    }
}
