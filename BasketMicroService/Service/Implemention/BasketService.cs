﻿using AutoMapper;
using BasketMicroService.DtoObjects;
using BasketMicroService.Service.Interfaces;
using BasketService.Infrastructure.Contexts;
using BasketService.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace BasketMicroService.Service.Implemention
{
    public class BasketService : IBasketService
    {
        private readonly BasketDataBaseContext context;
        private readonly IMapper mapper;

        public BasketService(BasketDataBaseContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public void AddItemToBasket(AddItemToBasketDto item)
        {
            var basket = context.Baskets.FirstOrDefault(p => p.Id == item.basketId);

            if (basket == null)
                throw new Exception("Basket not founs....!");

            var basketItem = mapper.Map<BasketItem>(item);
            basket.Items.Add(basketItem);
            context.SaveChanges();
        }


        public BasketDto GetBasket(string UserId)
        {
            var basket = context.Baskets
            .Include(p => p.Items)
            .SingleOrDefault(p => p.UserId == UserId);

            if (basket == null)
            {
                return null;
            }
            return new BasketDto
            {
                Id = basket.Id,
                UserId = basket.UserId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Id = item.Id,
                    ProductName = item.ProductName,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    ImageUrl = item.ImageUrl
                }).ToList(),
            };
        }

        public BasketDto GetOrCreateBasketForUser(string UserId)
        {

            var basket = context.Baskets
                .Include(p => p.Items)
                .SingleOrDefault(p => p.UserId == UserId);
            if (basket == null)
            {
                return CreateBasketForUser(UserId);
            }

            return new BasketDto
            {
                Id = basket.Id,
                UserId = basket.UserId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Id = item.Id,
                    ProductName = item.ProductName,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                    ImageUrl = item.ImageUrl,
                }).ToList(),
            };
        }

        public void RemoveItemFromBasket(Guid ItemId)
        {
            var item = context.BasketItems.SingleOrDefault(p => p.Id == ItemId);
            if (item == null)
                throw new Exception("BasketItem Not Found...!");
            context.BasketItems.Remove(item);
            context.SaveChanges();

        }


        public void SetQuantities(Guid itemId, int quantity)
        {
            var item = context.BasketItems.SingleOrDefault(p => p.Id == itemId);
            item.SetQuantity(quantity);
            context.SaveChanges();
        }

        public void TransferBasket(string anonymousId, string UserId)
        {
            var anonymousBasket = context.Baskets
           .Include(p => p.Items)
           .SingleOrDefault(p => p.UserId == anonymousId);

            if (anonymousBasket == null) return;

            var userBasket = context.Baskets.SingleOrDefault(p => p.UserId == UserId);
            if (userBasket == null)
            {
                userBasket = new Basket(UserId);
                context.Baskets.Add(userBasket);
            }
            foreach (var item in anonymousBasket.Items)
            {
                userBasket.Items.Add(new BasketItem
                {
                    ImageUrl = item.ImageUrl,
                    ProductId = item.ProductId,
                    ProductName = item.ProductName,
                    Quantity = item.Quantity,
                    UnitPrice = item.UnitPrice,
                });
            }
            context.Baskets.Remove(anonymousBasket);
            context.SaveChanges();
        }

        private BasketDto CreateBasketForUser(string UserId)
        {
            Basket basket = new Basket(UserId);
            context.Baskets.Add(basket);
            context.SaveChanges();
            return new BasketDto
            {
                UserId = basket.UserId,
                Id = basket.Id,
            };
        }

    }
}
