using Microsoft.EntityFrameworkCore;
using OrderMicrsService.DtoObjects;
using OrderMicrsService.Infrasttructure.Context;
using OrderMicrsService.Models;
using OrderMicrsService.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OrderMicrsService.Service.Implemetions
{
    public class OrderService : IOrderService
    {
        private readonly OrderDataBaseContext context;

        public OrderService(OrderDataBaseContext context)
        {
            this.context = context;
        }
        public void AddOrder(AddOrderDto addOrder)
        {
            List<OrderLine> orderLines = new List<OrderLine>();
            foreach (var item in addOrder.OrderLines)
            {
                orderLines.Add(new OrderLine
                {
                    ProductId = item.ProductId,
                    ProductName = item.ProductName,
                    ProductPrice = item.ProductPrice,
                    Quantity = item.Quantity,
                });
                Order order = new Order(addOrder.UserId, orderLines);
                context.Orders.Add(order);
                context.SaveChanges();

            }
        }

        public OrderDto GetOrderById(Guid Id)
        {
            var orders = context.Orders.
             Include(p => p.OrderLines)
             .FirstOrDefault(p => p.Id == Id);

            if (orders == null)
                throw new Exception("Order Not Found");

            var result = new OrderDto
            {
                Id = orders.Id,
                OrderPaid = orders.OrderPaid,
                OrderPlaced = orders.OrderPlaced,
                UserId = orders.UserId,
                OrderLines = orders.OrderLines.Select(o => new OrderLineDto
                {
                    Id = o.Id,
                    ProductId = o.ProductId,
                    ProductName = o.ProductName,
                    ProductPrice = o.ProductPrice,
                    Quantity = o.Quantity,
                }).ToList(),
            };
            return result;
        }

        public List<OrderDto> GetOrdersForUser(string UserId)
        {
            var orders = context.Orders.
              Include(p => p.OrderLines)
             .Where(p => p.UserId == UserId)
             .Select(p => new OrderDto
             {
                 Id = p.Id,
                 OrderPaid = p.OrderPaid,
                 OrderPlaced = p.OrderPlaced,
                 UserId = p.UserId,
                 OrderLines = p.OrderLines.Select(o => new OrderLineDto
                 {
                     Id = o.Id,
                     ProductId = o.ProductId,
                     ProductName = o.ProductName,
                     ProductPrice = o.ProductPrice,
                     Quantity = o.Quantity,
                 }).ToList(),
             }).ToList();
            return orders;
        }
    }
}
