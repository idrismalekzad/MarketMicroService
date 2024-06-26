﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BasketService.Model.Entities
{
    public class Basket
    {
        public Basket(string UserId)
        {
            this.UserId = UserId;
        }
        public Basket()
        {
        }
        public Guid Id { get; set; }
        public Guid? DiscountId { get; set; }
        public string UserId { get; private set; }

        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }

}
