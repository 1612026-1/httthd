//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ChungCuDataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class CuDan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CuDan()
        {
            this.CuDan1 = new HashSet<CuDan>();
        }
    
        public int IDCuDan { get; set; }
        public string HoTen { get; set; }
        public string CMND { get; set; }
        public string SDT { get; set; }
        public Nullable<int> IDCanHo { get; set; }
        public Nullable<int> IDChuHo { get; set; }
        public string TinhTrang { get; set; }
        public Nullable<System.DateTime> NgayDen { get; set; }
        public Nullable<System.DateTime> NgayDi { get; set; }
    
        public virtual CanHo CanHo { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CuDan> CuDan1 { get; set; }
        public virtual CuDan CuDan2 { get; set; }
    }
}
