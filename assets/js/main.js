$(document).ready(function () {
  var currentDir = $("a").css("direction");

  if ($(".side_icon").length) {
    $(".side_icon").on("click", function () {
      $(".sideNav").css("left", "0");
    });
  }

  if ($(".sideNav .close").length) {
    $(".sideNav .close").on("click", function () {
      $(".sideNav").css("left", "-100%");
    });
  }

  if ($(".filla_slider").length) {
    $(".filla_slider").slick({
      arrows: false,
      infinite: false,
      autoplay: true,
      dots: true,
      autoplaySpeed: 5000,
      speed: 400,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    });
  }



  $(window).scroll(function () {
    if ($(this).scrollTop > 20) {
      $(".touch_icon").addClass("inSection");
    } else {
      $(".touch_icon").removeClass("inSection");
    }
  });



  $(window).on('load', function() {
    // code here
    setTimeout(()=>{
      $(".splash_parent").addClass("splachDisplayNone");
    }, 500)
   });


 

});

new WOW().init();