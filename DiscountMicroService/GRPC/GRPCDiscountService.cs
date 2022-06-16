using DiscountMicroService.Proto;
using DiscountMicroService.Service.Interfaces;
using Grpc.Core;
using System.Threading.Tasks;

namespace DiscountMicroService.GRPC
{
    public class GRPCDiscountService: DiscountServiceProto.DiscountServiceProtoBase
    {
        private readonly IDsicountService _discountService;
        public GRPCDiscountService(IDsicountService dsicountService)
        {
            _discountService = dsicountService;
        }

        public override Task<ResultAddNewDiscount> AddNewDiscount(RequestAddNewDiscount request, ServerCallContext context)
        {
            var result = _discountService.AddNewDiscount(request.Code, request.Ammount);
            return Task.FromResult(new ResultAddNewDiscount()
            {
                IsSuccess = result
            });
        }

        public override Task<ResultGetDiscountByCode> GetDiscountByCode(RequestGetDiscountByCode request, ServerCallContext context)
        {
            var date = _discountService.GetDiscountByCode(request.Code);
            return Task.FromResult(new ResultGetDiscountByCode()
            {
                Ammount = date.Amount,
                Code = date.Code,
                Id = date.ID.ToString(),
                Used = date.Used
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
