

$(document).ready(function () {
    
    $("#ktcsvc_btn").click(function () {

        $("#task_name").empty();
        $("#task_name").append(`<h5>Kiểm tra Cơ sở vật chất</h5>`)
        $("#content").empty();
        $.ajax({
            type: 'GET',
            url: "https://localhost:44356/api/csvc/1",
            async: false,
            jsonpCallback: 'test',
            contentType: 'web/json',
            datatype: 'json',
            success: function (json) {
                for (i = 0; i < json.results.length; i++) {
                    button_name = json.results[i].TenCSVC;

                    $("#content").append("<button>" + button_name + "</button>");
                }
            },

            error: function (e) {
                console.log(e.message);
            }
        });
        //$("#content").append(`           
        //<button type="button" id="xehoi_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Xe hơi</button>
        //<button type="button" id="tulanh_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Tủ lạnh</button>
        //<button type="button" id="dieuhoa_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Điều hòa</button>
        //<button type="button" id="maygiat_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Máy giặt</button>
        //<button type="button" id="tivi_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Ti vi</button>

        //<script>
        //    // Get the modal
        //    var modal = document.getElementById("myModal");

        //    // Get the button that opens the modal
        //    var xehoi_btn = document.getElementById("xehoi_btn");
        //    var tulanh_btn = document.getElementById("tulanh_btn");
        //    var dieuhoa_btn = document.getElementById("dieuhoa_btn");
        //    var maygiat_btn = document.getElementById("maygiat_btn");
        //    var tivi_btn = document.getElementById("tivi_btn");


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

        //    maygiat_btn.onclick = function() {
        //      modal.style.display = "block";
        //    }

        //    tivi_btn.onclick = function() {
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

