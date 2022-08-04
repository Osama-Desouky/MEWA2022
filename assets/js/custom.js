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
  $("a").click(function (e) {
    e.preventDefault();

    if (this.hash) {
      var target = "#" + this.hash.substr(1);
      var destination = $(target).offset().top - 10;

      $("#main")
        .stop()
        .animate(
          {
            scrollTop: "+=" + destination,
          },
          1000
        );
    }
  });
  
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
  $(".HappensNowOpen").click(function () {
    $(".happeningNow").toggleClass("openUpSection");
  });

  /*
  .. open chat
  */

  $(".chatNow").click(function () {
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
        items: 2.5
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
