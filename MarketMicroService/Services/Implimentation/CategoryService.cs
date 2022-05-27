using MarketMicroService.DtoObjects;
using MarketMicroService.Infrastructure;
using MarketMicroService.Models;
using MarketMicroService.Services.Intefaces;
using System.Collections.Generic;
using System.Linq;

namespace MarketMicroService.Services.Implimentation
{
    public class CategoryService : ICategoryService
    {
        private readonly ProductDatabaseContext context;

        public CategoryService(ProductDatabaseContext context)
        {
            this.context = context;
        }

        public void AddNewCatrgory(CategoryDto category)
        {
            Category newCategory = new Category
            {
                Description = category.Description,
                Name = category.Name,
            };
            context.Categories.Add(newCategory);
            context.SaveChanges();
        }

        public List<CategoryDto> GetCategories()
        {
            var data = context.Categories
               .OrderBy(p => p.Name)
               .Select(p => new CategoryDto
               {
                   Description = p.Description,
                   Name = p.Name,
                   Id = p.Id
               }).ToList();
            return data;
        }
    }
}
