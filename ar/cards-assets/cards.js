//   show popup
$(".trans-card").on("click", function () {
    // $(".map-popup").addClass("hide");
    // $(this).closest('div').find('.map-popup').addClass("hide")
    $(this).addClass("is-active")
   
  })


  
// close popups
$(".Details-close").on("click", function (e) {
    e.stopPropagation();
    $(".trans-card").removeClass("is-active");
  })
  
