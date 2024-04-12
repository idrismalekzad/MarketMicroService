using DiscountMicroService.Proto;
using DiscountMicroService.Service.Interfaces;
using Grpc.Core;
using System;
using System.Threading.Tasks;

namespace DiscountMicroService.GRPC
{
    public class GRPCDiscountService : DiscountServiceProto.DiscountServiceProtoBase
    {
        private readonly IDsicountService _discountService;
        public GRPCDiscountService(IDsicountService dsicountService)
        {
            _discountService = dsicountService;
        }

        public override Task<ResultAddNewDiscount> AddNewDiscount(RequestAddNewDiscount request, ServerCallContext context)
        {
            var result = _discountService.AddNewDiscount(request.Code, request.Amount);
            return Task.FromResult(new ResultAddNewDiscount()
            {
                IsSuccess = result
            });
        }

        public override Task<ResultGetDiscountByCode> GetDiscountByID(RequestGetDiscountById request, ServerCallContext context)
        {
            var date = _discountService.GetDiscountByID(Guid.Parse(request.Id));
            if (date is null)
            {
                return Task.FromResult(new ResultGetDiscountByCode
                {
                    Data = null,
                    IsSuccess = false,
                    Message = "کد نخفیف وارشد نشد"
                });
            }
            return Task.FromResult(new ResultGetDiscountByCode()
            {
                IsSuccess = true,
                Message = "",
                Data = new DiscountInfo()
                {
                    Amount = date.Amount,
                    Code = date.Code,
                    Id = date.ID.ToString(),
                    Used = date.Used
                }

            });
        }

        public override Task<ResultGetDiscountByCode> GetDiscountByCode(RequestGetDiscountByCode request, ServerCallContext context)
        {
            var date = _discountService.GetDiscountByCode(request.Code);
            if (date is null)
            {
                return Task.FromResult(new ResultGetDiscountByCode
                {
                    Data = null,
                    IsSuccess = false,
                    Message = "کد نخفیفورشد نشد"
                });
            }
            return Task.FromResult(new ResultGetDiscountByCode()
            {
                IsSuccess = true,
                Message = "",
                Data = new DiscountInfo()
                {
                    Amount = date.Amount,
                    Code = date.Code,
                    Id = date.ID.ToString(),
                    Used = date.Used
                }

            });
        }

        public override Task<ResultUseDiscount> useDisCount(RequestUseDiscount request, ServerCallContext context)
        {
            var result = _discountService.UseDiscount(System.Guid.Parse(request.Id));
            return Task.FromResult(new ResultUseDiscount()
            {
                IsSuccess = result
            });
        }
    }
}
