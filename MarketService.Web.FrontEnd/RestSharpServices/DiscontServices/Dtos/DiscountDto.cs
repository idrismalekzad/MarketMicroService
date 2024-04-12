using System;

namespace Market.AService.UI.RestSharpServices.DiscontServices.Dtos
{
    public class DiscountDto
    {
        public int Amount { get; set; }
        public string Code { get; set; }
        public Guid Id { get; set; }
        public bool Used { get; set; }
    }
}
