$(document).ready(function () {
  var currentDir = $("a").css("direction");

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  if ($(".header_slider").length) {
    $(".header_slider").slick({
      arrows: true,
      infinite: false,
      autoplay: true,
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




  $(".nav-icon1").click(function () {
    $(this).toggleClass("open");
    $("body").toggleClass("openMenuActive");
    $("#mySidenav").toggleClass("openBurgerMenu");
    $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  $(".nav-icon2").click(function () {
    $(this).toggleClass("open");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });



  // if($(".plus_icon").length){
  //   $(".plus_icon").on('click', function(){
  //     $(this).closest('.page_wrapper').toggleClass("active_page_menue")
  //     setTimeout(()=>{
  //       $(this).closest('.page_wrapper').find(".page_links").toggleClass('activeopacity')
  //     }, 500)
  //   })
  // }


  if ($(".timeline_slider").length) {
    $(".years_slider").slick({
      vertical: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      loop: false,
      focusOnSelect: true,
      loop: false,
      infinite: false,
      asNavFor: '.years_description',
      responsive: [{
        breakpoint: 524,
        settings: {
          vertical: false,



        }
      }]
    })

    $(".years_description").slick({
      vertical: true,
      swipe: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      loop: false,
      arrows: false,
      infinite: false,
      asNavFor: '.years_slider',
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    })
  }


  if ($(".faq_slider").length) {
    $(".faq_slider").slick({
      vertical: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      loop: false,
      focusOnSelect: true,
      loop: false,
      infinite: false,
      swipe: true,
      // autoplay: true,
      verticalSwiping: true,
      arrows: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    })
  }



  if ($(".faq_slider").length) {

    var activeOffset = $(".faq_slider .slick-current").offset().top;
    $('.ballfaq').offset({
      top: activeOffset
    });

    $('.faq_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var activeOffset = $(".faq_slider .slick-current").offset().top - 1;
      $('.ballfaq').offset({
        top: activeOffset
      });
    });
  }




  const directionpage = $("a").css("direction");
  console.log(directionpage)

  var paddingvar = "240px"



  window.onresize = function (event) {
    var viewportWidth = $(window).width();
    // console.log(viewportWidth);
    if(viewportWidth <= 524){
      console.log("yes")
      paddingvar = "0";
      // inilizeanimation();
    }
  };

  inilizeanimation = () => {
    console.log(paddingvar);
    var viewportWidth = $(window).width();
    if(viewportWidth <= 524){
      paddingvar = "0";
    }
    console.log(paddingvar);
    
    // gsap
    //   .timeline()
    //   .from(".mynavbar .links ul li", {
    //     opacity: 0,
    //     y: -10,
    //     stagger: 0.5,
    //     ease: "ease",
    //   })
    //   .from(".mynavbar, .logo", {
    //     y: -10,
    //     opacity: 0,
    //     ease: "ease"
    //   }, "1");

    if (directionpage == "rtl") {
      var headerLinks = gsap.timeline();
      headerLinks.from(".header_links a", {
        opacity: 0,
        right: "-100%",
        stagger: '.2',
        ease: 'ease'
      })


      var pageLinks = gsap.timeline();

      pageLinks.to(".page_wrapper", {
          paddingRight: paddingvar
        }, "0")
        .from(".page_links", {
          opacity: 0,
          width: "0",
          ease: 'ease'
        }, "0").from(".page_links li", {
          opacity: 0,
          stagger: .1,
          ease: "ease"
        })

      pageLinks.reversed(true);

    } else if (directionpage == "ltr") {
      var headerLinks = gsap.timeline();
      headerLinks.from(".header_links a", {
        opacity: 0,
        left: "-100%",
        stagger: '.2',
        ease: 'ease'
      })


      var pageLinks = gsap.timeline();

      pageLinks.to(".page_wrapper", {
          paddingLeft: paddingvar
        }, "0")
        .from(".page_links", {
          opacity: 0,
          width: "0",
          ease: 'ease'
        }, "0").from(".page_links li", {
          opacity: 0,
          stagger: .1,
          ease: "ease"
        })

      pageLinks.reversed(true);
    }


    // headerLinks.reversed(true)
    $(".nav-icon2").addClass("open");
    // setTimeout(() => {
    //   // $(".header_parent").removeClass("active_side_menue");
    //   $(".nav-icon2").removeClass("open");
    //   headerLinks.reverse();

    // }, 2000)


    $(".touch_icon .menu").on("click", function () {
      // $(this).parent().toggleClass("active_side_menue");
      headerLinks.reversed(!headerLinks.reversed());
    })


    if ($(".plus_icon").length) {
      $(".plus_icon").on('click', function () {
        $(this).closest('.page_wrapper').toggleClass("active_page_menue")
        pageLinks.reversed(!pageLinks.reversed());
        // setTimeout(()=>{
        //   $(this).closest('.page_wrapper').find(".page_links").toggleClass('activeopacity')
        // }, 500)
      })
    }


    gsap.timeline().from(".fixed_bottom_links li", {
      y: 15,
      opacity: 0,
      stagger: .4,
      ease: "ease"
    })

  }




  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }



  if ($(".years_slider").length) {

    var activeOffset = $(".years_slider .slick-current").offset().top;
    $('.ball').offset({
      top: activeOffset
    });

    $('.years_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var activeOffset = $(".years_slider .slick-current").offset().top - 1;
      $('.ball').offset({
        top: activeOffset
      });
    });
  }





  // setTimeout(() => {
  //   $(".spalch_parent").fadeOut();
    
  // }, 2500)

  inilizeanimation();




  if ($(".swiper_wrapper_slider").length) {
    var swiper = new Swiper('.swiper_wrapper_slider .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      loop: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      navigation: true,
      autoplay: true,
      loop: false,
      // loopAdditionalSlides: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 300,
        modifier: 2.5,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }


  if ($(".years_filter").length) {
    for (i = 2008; i <= 2022; i++) {
      $(".years_filter").append(`<li><a href="#" id="${i}">${i}</a></li>`)
    }

    $(".filter_box_conten").on('click', function () {
      let parentCar = $(this).closest(".filter_card");
      $(parentCar).find(".filter_list").slideToggle();
      $(parentCar).siblings().find(".filter_list").slideUp();
    })

    $(".filter_list li a").on('click', function (e) {
      e.preventDefault();
      let liText = $(this).text();
      $(this).closest(".filter_card_box").find(".filter_box_conten span").text(liText)
    })




    var yearsValue = $("#filtrYearsInput").val();
    var versionValue = $("#filtrVersionInput").val();


    $(".version_list li a").on('click', function () {
      let liText = $(this).attr("id");
      $(this).closest(".version_list").next().val(liText);
      versionValue = $("#filtrVersionInput").val();
      applayFilter()
      $(this).closest(".filter_list").slideUp();
    })

    $(".years_filter li a").on('click', function () {
      let liText = $(this).attr("id");
      $(this).closest(".years_filter").next().val(liText);
      yearsValue = $("#filtrYearsInput").val();
      applayFilter()
      $(this).closest(".filter_list").slideUp();
    })


    applayFilter = () => {
      if (versionValue == "all" && yearsValue == "all") {
        $(".book_card").parent().fadeIn();
      } else if (versionValue == "all") {
        $(".book_card").parent().fadeOut();
        $(`.y${yearsValue}`).parent().fadeIn();
      } else if (yearsValue == "all") {
        $(".book_card").parent().fadeOut();
        $(`.${versionValue}`).parent().fadeIn();
      } else {
        $(".book_card").parent().fadeOut();
        $(`.y${yearsValue}.${versionValue}`).parent().fadeIn();
      }
    }



  }



  console.log($(".logo img").attr("src"));

  cheackDarkTheme = () => {

    var dark_theme_session = sessionStorage.getItem("darkTheme");
    if (dark_theme_session) {
      $('body').addClass("contrast_theme");
      $(".logo img").attr("src", "./assets/images/white_loogo.svg");
    } else {
      $('body').remove("contrast_theme");
      $(".logo img").attr("src", "./assets/images/logo.svg");
    }

    if ($(".language_change").length) {
      $(".contrast_icon").click(function () {
        if ($('body').hasClass("contrast_theme")) {
          $('body').removeClass("contrast_theme");
          $(".logo img").attr("src", "./assets/images/logo.svg");
          sessionStorage.removeItem("darkTheme");
        } else {
          $('body').addClass("contrast_theme");
          $(".logo img").attr("src", "./assets/images/white_loogo.svg");
          sessionStorage.setItem("darkTheme", "true");
        }
      })
    }
  }

  cheackDarkTheme();



  if ($(".sidenav").length) {
    $(".sidenav .submen_parent a").on('click', function () {
      $(this).find(" > i").toggleClass("activeMen")
      $(this).parent().find(" > .submenu").slideToggle();
    })
  }


  var pageFont = $("html").css('font-size');
  pageFont = parseInt(pageFont)
  if($(".mynavbar").length){
    $(".font_increase").on('click', function(){
      pageFont++;
      $("html").css('font-size', `${pageFont}px`)
    })

    $(".font_decrease").on('click', function(){
      pageFont--;
      $("html").css('font-size', `${pageFont}px`)
    })
  }


});

new WOW().init();