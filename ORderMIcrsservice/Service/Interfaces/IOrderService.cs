using OrderMicrsService.DtoObjects;
using System;
using System.Collections.Generic;

namespace OrderMicrsService.Service.Interfaces
{
    public interface IOrderService
    {
        void AddOrder(AddOrderDto addOrder);
        List<OrderDto> GetOrdersForUser(string UserId);
        OrderDto GetOrderById(Guid Id);
    }
}
