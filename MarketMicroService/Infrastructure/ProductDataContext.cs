using MarketMicroService.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketMicroService.Infrastructure
{
    public class ProductDatabaseContext : DbContext
    {
        public ProductDatabaseContext(DbContextOptions<ProductDatabaseContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
