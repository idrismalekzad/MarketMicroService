using System;
using System.Collections.Generic;
using System.Linq;

namespace Market.AService.UI.RestSharpServices.BasketSercvices.Dtos
{
	public class BasketDto
	{
		public string id { get; set; }
		public string userId { get; set; }
        public Guid? discountId { get; set; }
        public List<BasketItemDto> items { get; set; }
        public DiscountInBasketDto DiscountDetail { get; set; } = null;
        public int TotalPrice()
		{
            int result = items.Sum(p => p.unitPrice * p.quantity);
            if (discountId.HasValue)
                result = result - DiscountDetail.Amount;
            return result;
        }
	}
}

