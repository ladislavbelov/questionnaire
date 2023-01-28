

$(".questions-block__next-link").click(function (event) {
  // event.preventDefault;
  var flag = true;
  $(':radio').each(function () {
      name = $(this).attr('name');
      if (flag && !$(':radio[name="' + name + '"]:checked').length) {
          $('.submit-tip').css({ display: "block" });
          $('#mis').html("go back");
          $("#mis").attr("href", '#'+ name);
          flag = false;
      }
  });
  $('.questions-block__item').each(function () {
          if ( $(this).hasClass("ready") ) {
      } else {
          $(this).addClass("warn");
      }
  });
  return flag;
});

$('input:radio').change(function(){
$(this).parents('.questions-block__item').addClass('ready');
});
