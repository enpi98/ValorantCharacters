using DTO;
using ServiceLayer;
using Microsoft.AspNetCore.Mvc;

namespace Valorant.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValorantController : ControllerBase
    {
        private readonly IValorantService valorantService;

        public ValorantController(IValorantService valorantService)
        {
            this.valorantService = valorantService;
        }
      
        [HttpGet]
        [Route("characters")]
        public ActionResult<List<ValorantDTO>> get()
        {
            return Ok(valorantService.getUsers());
        }


        [HttpPost]
        [Route("characters")]
        public ActionResult<ValorantDTO> create(ValorantDTO valorant)
        {
            return Ok(valorantService.insert(valorant));
        }
       

        [HttpDelete]
        [Route("characters/{Id:int}")]
        public ActionResult<int> delete(int Id)
        {

            return Ok(valorantService.deleteUser(new ValorantDTO(Id)));
        }
    }
}


   
