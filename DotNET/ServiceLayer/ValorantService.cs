using DTO;
using Entity;
using RepositoryLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static ServiceLayer.ValorantService;

namespace ServiceLayer
{
    public class ValorantService : IValorantService
    {
        private readonly AppDbContext _context;
        public ValorantService(AppDbContext context)
        {
            _context = context;
        }
        public ValorantDTO insert(ValorantDTO valo)
        {
            ValorantEntity userEntity = new ValorantEntity();

            userEntity.Name = valo.Name;
            userEntity.Country = valo.Country;
            userEntity.Ability = valo.Ability;

            _context.Add(userEntity);
            _context.SaveChanges();
            valo.Id = userEntity.Id;
            return valo;
        }

        public List<ValorantDTO> getUsers()
        {
            List<ValorantDTO> valoList = new List<ValorantDTO>();

            List<ValorantEntity> list = _context.TBLVALORANT.ToList();
            if (list != null)
            {
                foreach (ValorantEntity ue in list)
                {
                    valoList.Add(new ValorantDTO(ue.Id, ue.Name, ue.Country, ue.Ability));
                }
            }
            return valoList;
        }

        public int deleteUser(ValorantDTO valo)
        {
            ValorantEntity userEntity = new ValorantEntity();
            userEntity.Id = valo.Id;
            _context.Remove(userEntity);
            _context.SaveChanges();
            return valo.Id;
        }


    }
}
