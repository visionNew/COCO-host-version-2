$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        autoHeight:true,
        loop: true,
        dots: false,
        autoplayHoverPause:true,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
        });
    });
function startProgressBar() {
// apply keyframe animation
$(".slide-progress").css({
    width: "100%",
    transition: "width 4150ms"
});
}

function resetProgressBar() {
$(".slide-progress").css({
    width: 0,
    transition: "width 0s"
});
}


//Hamburger
$(function() {
  function opacityMenu() {
    var activeOpacity = $(".nav_list").hasClass("active");
    $(".nav_list").animate({left: activeOpacity ? "0%" : "100%"}, 400);
  }
  $(".hamburger").click(function(event) {
    event.stopPropagation();
    $(".hamburger").toggleClass("open");
    $(".nav_list").toggleClass("active");
    opacityMenu();
  });
});

//Service Overview Nav
$(function() {     
  $('.toggle_button').on('click',function(e) {
      e.preventDefault();
      $('.nav_main').slideToggle();
  });
});

// FAG
$(function() {
    function slideMenu() {
      var activeState = $(".menu-list-left").hasClass("active");
      $(".menu-list-left").animate({bottom: activeState ? "0%" : "-100%"}, 400);
    }
    $(".faq_content").click(function(event) {
      event.stopPropagation();
      $(".menu-list-left").toggleClass("active");
      slideMenu();
    });
  
    $(".menu-list-left").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list-left .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list-left .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
  });

  $(function() {
    function slideMenu() {
      var activeState = $(".menu-list-right").hasClass("active");
      $(".menu-list-right").animate({bottom: activeState ? "0%" : "-100%"}, 400);
    }
    $(".faq_content").click(function(event) {
      event.stopPropagation();
      $(".menu-list-right").toggleClass("active");
      slideMenu();
    });
  
    $(".menu-list-right").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list-right .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list-right .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
  });


// Subscribe Input
$(document).ready(function(){
	$('.input_placeholder input').on('focus',function(){
		if(!$(this).parent('.input_placeholder').find('label').hasClass('hide')){
                        $(this).parent('.input_placeholder').find('label').addClass('hide');
                        }
	});
            $('.input_placeholder input').on('blur',function(){
		if($(this).val() == '' && $(this).parent('.input_placeholder').find('label').hasClass('hide')){
                        $(this).parent('.input_placeholder').find('label').removeClass('hide');
                    }
             });
});