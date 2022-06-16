using DiscountMicroService.Models;
using Microsoft.EntityFrameworkCore;

namespace DiscountMicroService.Infrastructure.Context
{
    public class DiscountDataBaseDontext: DbContext
    {
        public DiscountDataBaseDontext(DbContextOptions<DiscountDataBaseDontext> options) :base(options)
        {

        }
        public DbSet<DiscountCode> DiscountCodes { get; set; }
    }
}
