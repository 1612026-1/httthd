

$(document).ready(function () {




    $("#cngt_btn").click(function () {
        $.ajax({
            type: 'GET',
            url: "https://localhost:44356/api/csvc/1",
            async: false,
            jsonpCallback: 'test',
            contentType: 'web/json',
            datatype: 'json',
            success: function (json) {

            }
        });

        $("#task_name").empty();
        $("#task_name").append(`<h5>Cập nhật giấy tờ</h5>`)
        $("#content").empty();
        $("#content").append(`           
        <button type="button" id="hdmb_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Hợp đồng mua bán</button>
        <button type="button" id="gcnshch_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Giấy chứng nhận sở hữu căn hộ</button>
        <button type="button" id="hdsd_btn" class="btn btn-info" style="margin-bottom: 1rem;text-align: left">Hợp đồng sử dụng</button>

        <script>
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var hdmb_btn = document.getElementById("hdmb_btn");
            var gcnshch_btn = document.getElementById("gcnshch_btn");
            var hdsd_btn = document.getElementById("hdsd_btn");


            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            gcnshch_btn.onclick = function() {
              modal.style.display = "block";
            }

            hdmb_btn.onclick = function() {
              modal.style.display = "block";
            }

            hdsd_btn.onclick = function() {
              modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }
        
        </script>
        `);
    });

})

