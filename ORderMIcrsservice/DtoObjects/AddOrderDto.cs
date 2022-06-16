using System.Collections.Generic;

namespace OrderMicrsService.DtoObjects
{
    public class AddOrderDto
    {
        public string UserId { get; set; }
        public List<AddOrderLineDto> OrderLines { get; set; }

    }
}
