using BasketMicroService.DtoObjects;
using System;

namespace BasketMicroService.Service.Interfaces
{
    public interface IBasketService
    {
        BasketDto GetOrCreateBasketForUser(string UserId);
        BasketDto GetBasket(string UserId);
        void AddItemToBasket(AddItemToBasketDto item);
        void RemoveItemFromBasket(Guid ItemId);
        void SetQuantities(Guid itemId, int quantity);
        void TransferBasket(string anonymousId, string UserId);

    }
}
