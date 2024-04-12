using Market.AService.UI.Models.Dtos;
using Market.AService.UI.RestSharpServices.BasketSercvices.Dtos;
using RestSharp;
using System;
using System.Linq;
using System.Text.Json;

namespace Market.AService.UI.RestSharpServices.BasketSercvices
{
	public class BasketService : IBasketService
	{
		private readonly RestClient restClient;

		public BasketService(RestClient restClient)
		{
			this.restClient = restClient;
		}

		public ResultDto AddToBasket(AddToBasketDto addToBasket, string UserId)
		{
			var request = new RestRequest($"/api/Basket?UserId={UserId}", Method.Post);
			request.AddHeader("Content-Type", "application/json");
			string serializeModel = JsonSerializer.Serialize(addToBasket);
			request.AddParameter("application/json", serializeModel, ParameterType.RequestBody);
			var response = restClient.Execute(request);
			return GetResponseStatusCode(response);
		}

		private static ResultDto GetResponseStatusCode(RestResponse response)
		{
			if (response.StatusCode == System.Net.HttpStatusCode.OK)
			{
				return new ResultDto
				{
					IsSuccess = true,
				};
			}
			else
			{
				return new ResultDto
				{
					IsSuccess = false,
					Message = response.ErrorMessage
				};
			}
		}

		public BasketDto GetBasket(string UserId)
		{
			var request = new RestRequest($"/api/Basket?UserId={UserId}", Method.Get);
			var response = restClient.Execute(request);
			var basket = JsonSerializer.Deserialize<BasketDto>(response.Content);
			return basket;
		}

		public ResultDto DeleteFromBasket(Guid Id)
		{
			var request = new RestRequest($"/api/Basket?ItemId={Id}", Method.Delete);
			RestResponse response = restClient.Execute(request);
			return GetResponseStatusCode(response);
		}

		public ResultDto UpdateQuantity(Guid BasketItemId, int quantity)
		{
			var request = new RestRequest($"/api/Basket?basketItemId={BasketItemId}&quantity={quantity}", Method.Put);
			RestResponse response = restClient.Execute(request);
			return GetResponseStatusCode(response);
		}

        public ResultDto ApplyDiscountToBasket(Guid basketId, Guid discountId)
        {
            //https://localhost:6001/api/Basket/7d9df6bc-8e91-476f-c28d-08d983442ffa/9d9df6bc-8e91-476f-c28d-08d983442ffa

            var request = new RestRequest($"/api/Basket/{basketId}/{discountId}", Method.Put);
            RestResponse response = restClient.Execute(request);
            return GetResponseStatusCode(response);

        }
    }
}
