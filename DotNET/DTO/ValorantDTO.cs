using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ValorantDTO
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Ability { get; set; }

        public ValorantDTO()
        { }
        public ValorantDTO(int Id, string Name, string Country, string Ability)
        {
            this.Id = Id;
            this.Name = Name;
            this.Country = Country;
            this.Ability = Ability;
        }
        public ValorantDTO(int Id)
        {
            this.Id = Id;
        }


    }
}
