

$(document).ready(function () {




    $("#cnttcd_btn").click(function () {
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
        $("#task_name").append(`<h5>Cập nhật thông tin cư dân</h5>`)
        $("#content").empty();
        $("#content").append(`           
        <form>
  <div class="form-group">
    <label>Họ tên</label>
    <input type="text" class="form-control" id="exampleInputName" placeholder="Nguyễn Văn A">
  </div>
  <div class="form-group">
    <label>Căn hộ</label>
    <input type="text" class="form-control" id="exampleInputHouse" placeholder="" readonly>
  </div>
  <div class="form-group">
    <label>User name</label>
    <input type="text" class="form-control" id="exampleInputUsername" placeholder="" readonly>
  </div>
  <button type="submit" class="btn btn-primary">Cập nhật</button>
</form>
        `);
    });

})

