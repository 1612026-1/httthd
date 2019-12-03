using ChungCuDataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _1612026_QuanLyChungCu_Web.Controllers
{
    public class CSVCController : ApiController
    {
        public IEnumerable<CSVC> GetCSVCs()
        {
            using (ChungCuEntities2 entities2 = new ChungCuEntities2())
            {
                entities2.Configuration.ProxyCreationEnabled = false;
                return entities2.CSVCs.ToList();
            }
        }

        public CSVC GetCSVC(int id)
        {
            using (ChungCuEntities2 entities = new ChungCuEntities2())
            {
                entities.Configuration.ProxyCreationEnabled = false;
                return entities.CSVCs.FirstOrDefault(e => e.IDCSVC == id);
            }
        }


        //public CSVC GetNameCSVC(string name_csvc)
        //{
        //    using (ChungCuEntities2 entities2=new ChungCuEntities2())
        //    {
        //        entities2.Configuration.ProxyCreationEnabled = false;
        //        return entities2.CSVCs.First
        //    }
        //}

    }
}
