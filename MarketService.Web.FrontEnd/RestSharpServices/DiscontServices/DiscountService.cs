using DiscountMicroService.Proto;
using Grpc.Net.Client;
using Market.AService.UI.Models.Dtos;
using Market.AService.UI.RestSharpServices.DiscontServices.Dtos;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Channels;

namespace Market.AService.UI.RestSharpServices.DiscontServices
{
    public class DiscountService : IDiscountService
    {
        private readonly IConfiguration _configuration;
        private readonly GrpcChannel _grpcChannel;
        public DiscountService(IConfiguration configuration)
        {
            _configuration = configuration;
            string discountServer = _configuration["MicroservicAddress:Discount:Uri"];
            _grpcChannel = GrpcChannel.ForAddress(discountServer);
        }

        public ResultDto<DiscountDto> GetDiscountByCode(string Code)
        {
            var grpc_discountservice = new DiscountServiceProto.DiscountServiceProtoClient(_grpcChannel);

            var result = grpc_discountservice.GetDiscountByCode(new RequestGetDiscountByCode
            {
                Code = Code,
            });

            if (result.IsSuccess)
            {
                return new ResultDto<DiscountDto>
                {
                    Data = new DiscountDto
                    {
                        Amount = result.Data.Amount,
                        Code = result.Data.Code,
                        Id = Guid.Parse(result.Data.Id),
                        Used = result.Data.Used
                    },
                    IsSuccess = result.IsSuccess,
                    Message = result.Message,
                };
            }
            return new ResultDto<DiscountDto>
            {
                IsSuccess = false,
                Message = result.Message,
            };
        }

        public ResultDto<DiscountDto> GetDiscountById(Guid Id)
        {
            var grpc_discountService = new DiscountServiceProto.DiscountServiceProtoClient(_grpcChannel);
            var result = grpc_discountService.GetDiscountByID(new RequestGetDiscountById
            {
                Id = Id.ToString(),
            });

            if (result.IsSuccess)
            {
                return new ResultDto<DiscountDto>
                {
                    Data = new DiscountDto
                    {
                        Amount = result.Data.Amount,
                        Code = result.Data.Code,
                        Id = Guid.Parse(result.Data.Id),
                        Used = result.Data.Used
                    },
                    IsSuccess = result.IsSuccess,
                    Message = result.Message,
                };
            }
            return new ResultDto<DiscountDto>
            {
                IsSuccess = false,
                Message = result.Message,
            };
        }

        public ResultDto UseDiscount(Guid DiscountId)
        {
            var grpc_discountService = new DiscountServiceProto.DiscountServiceProtoClient(_grpcChannel);
            var result = grpc_discountService.useDisCount(new RequestUseDiscount
            {
                Id = DiscountId.ToString(),
            });
            return new ResultDto
            {
                IsSuccess = result.IsSuccess
            };
        }
    }
}
