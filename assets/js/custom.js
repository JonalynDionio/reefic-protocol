$(document).ready(function () {

	"use strict"; // Start of use strict

	/*=======================================================
			NAVIGATION
    ========================================================*/

	$('nav').coreNavigation({
		menuPosition: "right", // left, right, center, bottom
		container: true, // true or false
		mode: 'fixed',
		onInit: function () {
			console.log('Init coreNav');
		}
	});

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('nav').addClass('scrolled');
		} else {
			$('nav').removeClass('scrolled');
		}
	});

	/*=======================================================
			OWL CAROUSEL
    ========================================================*/

	$(".main-slider").owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true
	});

	$(".main-slider").on("translate.owl.carousel", function () {
		$(".slider-content h3, .slider-content h1, .slider-content a").removeClass("animated fadeInUp").css("opacity", "0");
	});
	$(".main-slider").on("translated.owl.carousel", function () {
		$(".slider-content h3, .slider-content h1, .slider-content a").addClass("animated fadeInUp").css("opacity", "1");
	});

	
	////------- Partnerships Section

$(document).ready(function(){
  $('.partners-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});


$(document).ready(function(){
  $('.press-release').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});


	
});