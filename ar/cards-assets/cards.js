//   show popup
$(".trans-card").on("mouseenter", function () {
    // $(".map-popup").addClass("hide");
    // $(this).closest('div').find('.map-popup').addClass("hide")
    $(".trans-card").addClass("not-active");
    $(".trans-card").removeClass("is-active");
    $(this).removeClass("not-active")
    $(this).addClass("is-active")
   
  })

  $(".trans-card").on("mouseleave", function () {
    $(".trans-card").removeClass("not-active");
    $(this).removeClass("is-active")
    
  })
  
// // close popups
// $(".Details-close").on("click", function (e) {
//     e.stopPropagation();
//     $(".trans-card").removeClass("is-active");
//   })
  
