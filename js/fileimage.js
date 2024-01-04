// file image plus
$(".input_wrap_plus").on("click", function () {
  var index = $(this).data("index");
  var total = $('input[name="input_imgs' + index + '[]"]').length;

  total = (total + 1);

  var inp = "$('#view_imgs" + index + "_" + total + "')";

  var html = "";
  html += '<li class="img_id_set img_id_set' + index + '_' + total + '">';
  html += "<figure class='imgfile_box'>";
  html += "<img src='../img/img_no.png' data-file='" + total + "' class='selProductFile' id='view_imgs" + index + "_" + total + "' />";
  html += "</figure>";
  html += '<input type="text" name="title_imgs' + index + '[]" id="title_imgs' + index + '_' + total + '" placeholder="사진 제목을 입력해주세요." />';
  html += '<textarea name="text_imgs' + index + '[]" id="text_imgs' + index + '_' + total + '" placeholder="사진 내용을 입력해주세요."></textarea>';
  html += '<input type="file" name="input_imgs' + index + '[]" id="input_imgs' + index + '_' + total + '" class="input_imgs' + index + '" onchange="imgPrivew(this,' + inp + ',1)" />';
  html += "<input type='hidden' name='add_img" + index + "[]' value='" + total + "' />";
  html += "</li>";

  $(".input_imgs_wrap" + index).append(html);
});

// file image custom
function imgPrivew(html, target_id) { // 첨부파일 미리보기
  if (html.files && html.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      target_id.attr("src", e.target.result);
    }
    reader.readAsDataURL(html.files[0]);
  }
}

$(document).ready(function () { // 파일 추가
  $("#input_imgs0").on("change", handleImgFileSelect_thumb0);
});

function handleImgFileSelect_thumb0(e) {
  sel_files = []; // 이미지 정보 초기화
  $(".input_imgs_wrap").empty(); // 이미지 정보 초기화

  var files = e.target.files;
  var filesArr = Array.prototype.slice.call(files);

  var index = 0;
  filesArr.forEach(function (f) {
    if (!f.type.match("image.*")) {
      alert("이미지 확장자만 업로드가 가능합니다.");
      return;
    }
    sel_files.push(f);
    var reader = new FileReader();
    reader.onload = function (e) {
      var html = "<div class=\"input_imgs_id_" + index + "\"><img src=\"" + e.target.result + "\" data-file='" + f.name + "'></div> ";
      $(".input_imgs_wrap").append(html);
      index++;
    }
    reader.readAsDataURL(f);
  });
}