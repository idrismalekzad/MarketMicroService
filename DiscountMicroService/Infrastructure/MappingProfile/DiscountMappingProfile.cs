using AutoMapper;
using DiscountMicroService.DtoObjects;
using DiscountMicroService.Models;

namespace DiscountMicroService.Infrastructure.MappingProfile
{
    public class DiscountMappingProfile: Profile
    {
        public DiscountMappingProfile()
        {
            CreateMap<DiscountCode, DiscountDto>().ReverseMap();
        }
    }
}
