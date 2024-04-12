using DiscountMicroService.DtoObjects;
using System;

namespace DiscountMicroService.Service.Interfaces
{
    public interface IDsicountService
    {
        DiscountDto GetDiscountByCode(string code);
        DiscountDto GetDiscountByID(Guid id);
        bool UseDiscount(Guid id);
        bool AddNewDiscount(string code, int amount);
    }
}
