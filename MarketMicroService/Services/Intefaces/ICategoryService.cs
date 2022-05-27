using MarketMicroService.DtoObjects;
using System.Collections.Generic;

namespace MarketMicroService.Services.Intefaces
{
    public interface ICategoryService
    {
        List<CategoryDto> GetCategories();
        void AddNewCatrgory(CategoryDto category);
    }
}
