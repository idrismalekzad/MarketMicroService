using AutoMapper;
using DiscountMicroService.DtoObjects;
using DiscountMicroService.Infrastructure.Context;
using DiscountMicroService.Models;
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
            DiscountCode discountCode = new DiscountCode()
            {
                Amount = amount,
                Code = code,
                Used = false,
            };
            _dbContext.DiscountCodes.Add(discountCode);
            _dbContext.SaveChanges();
            return true;
        }

        public DiscountDto GetDiscountByID(Guid id)
        {
            var myObject = _dbContext.DiscountCodes.FirstOrDefault(ss => ss.ID.Equals(id));

            var map = _mapper.Map<DiscountDto>(myObject);

            return map;
        }

        public DiscountDto GetDiscountByCode(string code)
        {
            var myObject = _dbContext.DiscountCodes.FirstOrDefault(ss => ss.Code.Equals(code));

            var map = _mapper.Map<DiscountDto>(myObject);

            return map;
        }

        public bool UseDiscount(Guid Id)
        {
            var discountCode = _dbContext.DiscountCodes.Find(Id);
            if (discountCode == null)
                throw new Exception("Discouint Not Found....");
            discountCode.Used = true;
            _dbContext.SaveChanges();
            return true;
        }
    }
}
