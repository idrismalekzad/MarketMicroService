using AutoMapper;
using DiscountMicroService.DtoObjects;
using DiscountMicroService.Infrastructure.Context;
using DiscountMicroService.Service.Interfaces;
using System;
using System.Linq;

namespace DiscountMicroService.Service.Implementation
{
    public class DiscountService : IDsicountService
    {

        private readonly DiscountDataBaseDontext _dbContext;
        private readonly IMapper _mapper;

        public DiscountService(DiscountDataBaseDontext discountDataBaseDontext, IMapper mapper)
        {
            _dbContext = discountDataBaseDontext;
            _mapper = mapper;
        }

        public bool AddNewDiscount(string code, int amount)
        {
            throw new NotImplementedException();
        }

        public DiscountDto GetDiscountByCode(string code)
        {
            var myObject = _dbContext.DiscountCodes.FirstOrDefault(ss => ss.Code.Equals(code));

            var map = _mapper.Map<DiscountDto>(myObject);

            return map;
        }

        public bool UseDiscount(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
