$(document).ready(function(){
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
    
     $(".owl-carousel").owlCarousel({
         autoPlay : true,
         items : 8,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,4],
        itemsTablet: [768,4],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : false,
 
        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        //Autoplay
        stopOnHover : true
     });
//    var owl = $("#owl-demo");
// 
//      owl.owlCarousel({
//          items : 8,
//        itemsCustom : true,
//        itemsDesktop : [1199,4],
//        itemsDesktopSmall : [980,3],
//        itemsTablet: [768,2],
//        itemsTabletSmall: false,
//        itemsMobile : [479,1],
//        singleItem : false,
//        itemsScaleUp : false,
// 
//        //Basic Speeds
//        slideSpeed : 200,
//        paginationSpeed : 800,
//        rewindSpeed : 1000,
//
//        //Autoplay
//        autoPlay : true,
//        stopOnHover : true
//          
//       });
   
});