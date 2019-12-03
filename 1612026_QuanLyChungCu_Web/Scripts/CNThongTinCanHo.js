

$(document).ready(function () {




    $("#cnttch_btn").click(function () {
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
        $("#task_name").append(`<h5>Cập nhật thông tin căn hộ</h5>`)
        $("#content").empty();
        $("#content").append(`           
        <form>
  <div class="form-group" >
    <label>Mã căn hộ</label>
    <input type="text" class="form-control" id="exampleInputName" placeholder="A123">
  </div>
  <div class="form-group">
    <label>Tầng</label>
    <input type="text" class="form-control" id="exampleInputFloor" placeholder="" readonly>
  </div>
  <div class="form-group">
    <label>Chủ sở hữu</label>
    <input type="text" class="form-control" id="exampleInputOwner" placeholder="" readonly>
  </div>
  <button type="submit" class="btn btn-primary">Cập nhật</button>
</form>
        `);
    });

})

