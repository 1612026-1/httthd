using System.Web;
using System.Web.Mvc;

namespace _1612026_QuanLyChungCu_Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
