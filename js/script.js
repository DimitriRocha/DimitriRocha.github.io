$(document).ready(function(){
	backToTopToggler();

	$("#homemCorrendo").animate({
		left: "0%"
	}, 1000, function(){

	});

	$(".regularCarousel").owlCarousel({
		lazyLoad: true,
		stagePadding: 20,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1000,
		center: true,
		loop:true,
		margin:20,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				stagePadding: 60,
			},
			600:{
				items:3,
			},
			1000:{
				items:4,
			}
		}
	});

	$(".videoCarousel").owlCarousel({
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplaySpeed: 1000,
		center: true,
		loop:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				stagePadding: 60
			},
			600:{
				items:3,
			},
			1000:{
				items:4,
			}
		}
	});

	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

	$(".close").click(function(){
		$("iframe").attr("src", $("iframe").attr("src"));
	});

	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex','-1');
						$target.focus();
					};
				});
			}
		}
	});

	$(window).scroll(function(){
		backToTopToggler();
	});
});

function backToTopToggler() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("backToTop").style.display = "block";
	} else {
		document.getElementById("backToTop").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function backToTopFunction() {
	document.body.scrollTop = 0; // For Safari
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}
