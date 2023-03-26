document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    //    console.log(window.scrollY,window.scrollX)
    if (window.scrollY > 50) {
      document.querySelector(".menuBg").classList.add("fixedTop");
      // add padding top to show content behind navbar
      // navbar_height = document.querySelector('.navbar').offsetHeight;
      // document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.querySelector(".menuBg").classList.remove("fixedTop");
      // remove padding top from body
      // document.body.style.paddingTop = '0';
    }
  });
});

$(document).ready(function () {


  $("a.fancybox").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    loop: true,
});
$("a.fancyboxVideo").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    type: "iframe",
    youtube: {
        autoplay: 1, // enable autoplay
    }
});

  // $("a").click(function (e) {
  //   e.preventDefault();

  //   if (this.hash) {
  //     var target = "#" + this.hash.substr(1);
  //     var destination = $(target).offset().top - 10;

  //     $("#main")
  //       .stop()
  //       .animate(
  //         {
  //           scrollTop: "+=" + destination,
  //         },
  //         1000
  //       );
  //   }
  // });
  
  /*
  .. fix issue of scrolling wen open menu
  */
  $(".menuBg  .navbar-toggler").on("click", function () {
    $(".menuBg ").toggleClass("preventScrolling");
  });
  /*
  .. scroll top 
  */
  $(".scrollTop").on("click", function () {
    $("html, body").animate({
      scrollTop: $("html, body").offset().top,
    });
  });
  /*
  .. open slide down
  */
  $(".HappensNowOpen").click(function (e) {
    e.preventDefault();
    $(".happeningNow").toggleClass("openUpSection");
  });

  /*
  .. open chat
  */

  $(".chatNow").click(function (e) {
    e.preventDefault();
    $(".chatNowBox").fadeToggle();
  });

/*
  .. sliders
  */
  $(".owl-carousel-header").owlCarousel({
    loop: false,
    rtl: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText: [
      '<img src="../assets/images/home/arrowOwlH2.svg" />',
      '<img src="../assets/images/home/arrowOwlH1.svg" />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-carousel-center").owlCarousel({
    loop: false,
    margin: 35,
    nav: true,
    autoplay:true,
    navText: [
      '<img src="../assets/images/home/arrowSlider2.svg" />',
      '<img src="../assets/images/home/arrowSlider1.svg" />',
    ],
    rtl: true,
    stagePadding: 38,
    // responsiveClass:true,
    responsive: {
      0: {
        items: 1.2,
      },
      1000: {
        items: 2.2,
      },
      1400: {
        items: 3
      },
    },
  });

  $(".owl-carousel-news").owlCarousel({
    loop: false,
    margin: 40,
    rtl: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
  $(".owl-carousel-event1").owlCarousel({
    loop: false,
    margin: 40,
    stagePadding: 30,
    rtl: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
  $(".owl-carousel-event2").owlCarousel({
    loop: true,
    margin: 40,
    stagePadding: 25,
    rtl: true,
    nav: true,
    navText: [
      '<img src="../assets/images/home/arrowSlider1.svg" />',
      '<img src="../assets/images/home/arrowSlider2.svg" />',
    ],
    // items:3.5,
    responsive: {
      0: {
        items: 1.2,
      },
      1000: {
        items: 2.5,
      },
      1500: {
        items: 3.5,
      },
    },
  });
  const swiper = new Swiper(".swiperMain", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 3000,
      },
    // If we need pagination
    pagination: {
      //   el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
  });  
});



document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    //    console.log(window.scrollY,window.scrollX)
    if (window.scrollY > 110) {
      document.querySelector(".scroll-sec").classList.add("fixed-ntp2020");
    } else {
      document.querySelector(".scroll-sec").classList.remove("fixed-ntp2020");
    }
  });
});

$(function () {
$("#Challenge-a").on("click", function () {
  scrollTo("#Challenge", function () {
    $(".scroll-sec a").removeClass("active");
    $("#Challenge-a").addClass("active");
  });
});

$("#Goals-a").on("click", function () {
  scrollTo("#Goals", function () {
    $(".scroll-sec a").removeClass("active");
    $("#Goals-a").addClass("active");
  });
});

$("#Pointers-a").on("click", function () {
  scrollTo("#Pointers", function () {
    $(".scroll-sec a").removeClass("active");
    $("#Pointers-a").addClass("active");
  });
});

$("#Initiatives-a").on("click", function () {
  scrollTo("#Initiatives", function () {
    $(".scroll-sec a").removeClass("active");
    $("#Initiatives-a").addClass("active");
  });
});


$(document).scroll(function () {
  var scrollToDiv = $(this).scrollTop();

  if (scrollToDiv >= calculateOffset(".challenge") - 500) {
    $(".scroll-sec a").removeClass("active");
    $("#Challenge-a").addClass("active");
  } else $("#Challenge-a").removeClass("active");

  if (scrollToDiv >= calculateOffset(".ntp-goals") - 250) {
    $(".scroll-sec a").removeClass("active");
    $("#Goals-a").addClass("active");
  } else $("#Goals-a").removeClass("active");

  if (scrollToDiv >= calculateOffset(".pointers") - 250) {
    $(".scroll-sec a").removeClass("active");
    $("#Pointers-a").addClass("active");
  } else $("#Pointers-a").removeClass("active");

  if (scrollToDiv >= calculateOffset(".ntp-initiatives") - 250) {
    $(".scroll-sec a").removeClass("active");
    $("#Initiatives-a").addClass("active");
  } else $("#Initiatives-a").removeClass("active");

});







// $(".scroll-sec a").on("click", function () {
//   $(".scroll-sec a ").removeClass("active");
//   $(this).addClass("active");
// });




var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  // if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top) -100;
};

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop:  calculateOffset(sectionEl) - 250,
    },
    300,
    "swing",
    callback()
  );
};

})




$(document).ready(function () {

  // color func
  $(".black-white").on("click", function (e) {
    $("body").toggleClass("contrast");
  
    e.stopPropagation();
   
  });
  
  
  
    /* --- Font sizing Function --- */
    $('#increase-font').click(function(){
      modifyFontSize('html','increase');
    });
    $('#decrease-font').click(function(){
      modifyFontSize('html','decrease')
    });
    $('#reset-font').click(function(){
      modifyFontSize('html','reset')
    });
  
  });
  
    function modifyFontSize(MyElement,flag){
  
      var HtmlElement = $(MyElement);
      var currentFontSize = parseInt (HtmlElement.css('font-size'));
      
      if (flag =='increase' & currentFontSize < 18 )
          currentFontSize += 1;
      else if (flag == 'decrease' & currentFontSize >= 15 )
          currentFontSize -= 1;
      else if (flag == 'reset')
      currentFontSize = 16;
  
      HtmlElement.css('font-size', currentFontSize);
  
      // console.log(currentFontSize);
  
    }
  