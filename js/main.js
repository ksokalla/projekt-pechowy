'use strict';

$(function() {
	
		/*--------smooth scroll------*/
	
	$('a[href^="#"]').on('click', function () {
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 90
		}, 1000, 'swing');
	});
	
	/*-------- smooth scroll end -------------------*/
	
		/*-------- scroll menu color change ------------*/
	
	if ($(window).scrollTop() >= 90) {
			$('#main-nav').addClass('scroll');
			
	}
	
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 90) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({'transition': 'all 0.3s' });
			$('#brand').addClass('scroll');
		}
		else {
			$('#main-nav').removeClass('scroll');
			$('#brand').removeClass('scroll');
		}
	});
		/*-------- scroll menu color end ------------*/
	
});