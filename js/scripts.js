$(document).ready(function() {
  $("input#switchDark").click(function() {
    if ($("body").hasClass("dark")) {
      $("body").removeClass();
      $("input#switchDark").attr("value", "Switch Dark");
    }
    else {
      $("body").removeClass();
      $("body").addClass("dark");
      $("input#switchDark").attr("value", "Switch Light");
    }
  });
});
