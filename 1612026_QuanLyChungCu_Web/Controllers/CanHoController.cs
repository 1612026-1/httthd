using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ChungCuDataAccess;

namespace _1612026_QuanLyChungCu_Web.Controllers
{
    public class CanHoController : ApiController
    {
        public IEnumerable<CanHo> GetCanHos()
        {
            using(ChungCuEntities2 entities =new ChungCuEntities2())
            {
                entities.Configuration.ProxyCreationEnabled = false;
                return entities.CanHos.ToList();
            }
        }

        public CanHo GetCanHos(int id)
        {
            using (ChungCuEntities2 entities= new ChungCuEntities2())
            {
                entities.Configuration.ProxyCreationEnabled = false;
                return entities.CanHos.FirstOrDefault(e => e.IDCanHo == id);
            }
        }


    }
}
