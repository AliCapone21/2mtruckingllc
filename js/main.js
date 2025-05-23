
(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});

		
		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration: 300,
			closeOnClick:true,
		});
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});

		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		

		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		

		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

	});
	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);

function setCookie(name, value, days) {
	const d = new Date();
	d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	return match ? match[2] : null;
}

function acceptCookies() {
	setCookie('cookie_consent', 'accepted', 365);
	document.getElementById('cookieConsentBanner').style.display = 'none';
}

function declineCookies() {
	setCookie('cookie_consent', 'declined', 365);
	document.getElementById('cookieConsentBanner').style.display = 'none';
}

function openCookieSettings() {
	document.getElementById('cookieSettingsModal').style.display = 'flex';
}

function closeCookieSettings() {
	document.getElementById('cookieSettingsModal').style.display = 'none';
}

function saveCookiePreferences() {
	const analyticsEnabled = document.getElementById('analyticsCookies').checked;
	const marketingEnabled = document.getElementById('marketingCookies').checked;

	setCookie('analytics_cookies', analyticsEnabled ? 'true' : 'false', 365);
	setCookie('marketing_cookies', marketingEnabled ? 'true' : 'false', 365);
	setCookie('cookie_consent', 'custom', 365);

	closeCookieSettings();
	document.getElementById('cookieConsentBanner').style.display = 'none';

	// Optional: load scripts conditionally
	if (analyticsEnabled) {
		console.log("Analytics scripts would load here");
	}
	if (marketingEnabled) {
		console.log("Marketing scripts would load here");
	}
}

window.onload = function () {
	if (!getCookie('cookie_consent')) {
		document.getElementById('cookieConsentBanner').style.display = 'block';
	}
};
document.addEventListener('DOMContentLoaded', function() {
	const newsletterForm = document.getElementById('fakeNewsletterForm');
	if (newsletterForm) {
		newsletterForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const message = document.getElementById('newsletterMessage');
			if (message) {
				message.style.display = 'block';
				this.reset();
				setTimeout(() => {
					message.style.display = 'none';
				}, 3000);
			}
		});
	}

	const subscribeForm = document.getElementById('fakeSubscribeForm');
	if (subscribeForm) {
		subscribeForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const message = document.getElementById('subscribeMessage');
			if (message) {
				message.style.display = 'block';
				this.reset();
				setTimeout(() => {
					message.style.display = 'none';
				}, 3000);
			}
		});
	}
});
