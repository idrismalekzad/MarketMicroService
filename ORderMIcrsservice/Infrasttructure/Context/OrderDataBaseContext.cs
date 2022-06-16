using Microsoft.EntityFrameworkCore;
using OrderMicrsService.Models;
using System.Collections.Generic;   
namespace OrderMicrsService.Infrasttructure.Context
{
    public class OrderDataBaseContext:DbContext
    {
        public OrderDataBaseContext(DbContextOptions<OrderDataBaseContext> options)
       : base(options)
        {

        }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
    }
}
