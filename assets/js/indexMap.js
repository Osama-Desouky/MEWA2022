// filter anchors
$(".navigation-links a").on("click", function () {
    $(".navigation-links a").removeClass("active")
    $(this).addClass("active");
    $(".map-popup").addClass("hide");
    if( $("#location").hasClass("active")){
      $(".locations-section").removeClass("d-none")
      // $(".locations-section").addClass("d-block")
      $(".braches-section").addClass("d-none")
      $(".services-section").addClass("d-none")
    }
    else if( $("#branch").hasClass("active")){
      $(".braches-section").removeClass("d-none")
      // $(".locations-section").addClass("d-block")
      $(".locations-section").addClass("d-none")
      $(".services-section").addClass("d-none")
    }
    else if( $("#service").hasClass("active")){
      $(".services-section").removeClass("d-none")
      // $(".locations-section").addClass("d-block")
      $(".locations-section").addClass("d-none")
      $(".braches-section").addClass("d-none")
    }
  })


//   show popup
  $(".marker-with-popup a").on("click", function () {
    $(".map-popup").addClass("hide");
    $(this).closest('div').find('.map-popup').toggleClass("hide")
   
  })


// close popups
  $(".close-pop").on("click", function () {
    $(".map-popup").addClass("hide");
  })
  



// close popups when click anywhere out of ".map-bg"

$(document).click(function (e) {
    if (!$(e.target).is('.map-bg , .map-bg *')) {
        $(".map-popup").addClass("hide");
        // console.log("hhhhhhhhhhh");
    }
});