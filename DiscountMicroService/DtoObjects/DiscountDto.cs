using System;

namespace DiscountMicroService.DtoObjects
{
    public class DiscountDto
    {
        public Guid ID { get; set; }
        public int Amount { get; set; }
        public string Code { get; set; }
        public bool Used { get; set; }
    }
}
