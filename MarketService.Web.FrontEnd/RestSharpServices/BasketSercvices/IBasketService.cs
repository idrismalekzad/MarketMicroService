using Market.AService.UI.Models.Dtos;
using Market.AService.UI.RestSharpServices.BasketSercvices.Dtos;
using System;

namespace Market.AService.UI.RestSharpServices.BasketSercvices
{
	public interface IBasketService
	{
		BasketDto GetBasket(string UserId);
		ResultDto AddToBasket(AddToBasketDto addToBasket, string UserId);
		ResultDto DeleteFromBasket(Guid Id);
		ResultDto UpdateQuantity(Guid BasketItemId, int quantity);
        ResultDto ApplyDiscountToBasket(Guid basketId, Guid discountId);
    }
}
