using DTO;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public interface IValorantService
    {
        ValorantDTO insert(ValorantDTO valo);

        List<ValorantDTO> getUsers();

        int deleteUser(ValorantDTO valo);
    }
}
