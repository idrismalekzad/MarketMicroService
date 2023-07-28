using MarketMicroService.Models;
using Microsoft.EntityFrameworkCore;

namespace MarketMicroService.Infrastructure
{
    public class ProductDatabaseContext : DbContext
    {
        public ProductDatabaseContext(DbContextOptions<ProductDatabaseContext> options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        public ProductDatabaseContext() : base()
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
