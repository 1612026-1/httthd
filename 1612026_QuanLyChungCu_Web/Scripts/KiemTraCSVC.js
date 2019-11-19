<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />

$(document).ready(function () {
var baseUrl = "https://localhost:44356/",

    IDCanHo,
    SoPhong,
    SoTang,
    DienTich,
    TinhTrang,
    TenCSVCs;

    
    
        $("#ktcsvc_btn").click(function () {
            $("#content").empty();
            $.ajax({
                type: 'GET',
                url: baseUrl + "api/csvc",
                async: false,
                jsonpCallback: 'test',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function (json) {
                    for (i = 0; i < json.results.length; i++) {
                        TenCSVCs = json.results[i].id;
                        $("#content").append("<button>" + TenCSVCs+"</button>");
                    }
                },
                error: function (e) {
                    console.log(e.message);
                }
            })
        //$("#content").append(`           
        //<button type="button" id="xehoi_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Xe hơi</button>
        //<button type="button" id="tulanh_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Tủ lạnh</button>
        //<button type="button" id="dieuhoa_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Điều hòa</button>
        
        //<script>
        //    // Get the modal
        //    var modal = document.getElementById("myModal");

        //    // Get the button that opens the modal
        //    var xehoi_btn = document.getElementById("xehoi_btn");
        //    var tulanh_btn = document.getElementById("tulanh_btn");
        //    var dieuhoa_btn = document.getElementById("dieuhoa_btn");


        //    // Get the <span> element that closes the modal
        //    var span = document.getElementsByClassName("close")[0];

        //    // When the user clicks the button, open the modal 
        //    tulanh_btn.onclick = function() {
        //      modal.style.display = "block";
        //    }

        //    xehoi_btn.onclick = function() {
        //      modal.style.display = "block";
        //    }

        //    dieuhoa_btn.onclick = function() {
        //      modal.style.display = "block";
        //    }


        //    // When the user clicks on <span> (x), close the modal
        //    span.onclick = function() {
        //      modal.style.display = "none";
        //    }

        //    // When the user clicks anywhere outside of the modal, close it
        //    window.onclick = function(event) {
        //      if (event.target == modal) {
        //        modal.style.display = "none";
        //      }
        //    }
        //</script>
        
        //`);
    });

})
