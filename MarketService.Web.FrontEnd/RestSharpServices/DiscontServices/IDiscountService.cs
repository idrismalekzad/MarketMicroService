using Market.AService.UI.Models.Dtos;
using Market.AService.UI.RestSharpServices.DiscontServices.Dtos;
using System;

namespace Market.AService.UI.RestSharpServices.DiscontServices
{
    public interface IDiscountService
    {
        ResultDto<DiscountDto> GetDiscountByCode(string Code);
        ResultDto<DiscountDto> GetDiscountById(Guid Id);
        ResultDto UseDiscount(Guid DiscountId);
    }
}
