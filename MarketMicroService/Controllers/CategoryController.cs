using MarketMicroService.DtoObjects;
using MarketMicroService.Services.Intefaces;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace MarketMicroService.Controllers
{
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public IActionResult Get()
        {
            var data = categoryService.GetCategories();
            return Ok(data);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public IActionResult Post([FromBody] CategoryDto categoryDto)
        {
            categoryService.AddNewCatrgory(categoryDto);
            return Ok();
        }

    }
}
