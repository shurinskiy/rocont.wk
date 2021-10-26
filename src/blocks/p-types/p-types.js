import Swiper from 'swiper/core';

(() => {
	new Swiper('.p-types__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		breakpoints: {
			1100: { 
				slidesPerView: 3.0,
			},
			960: { 
				slidesPerView: 2.6,
			},
			780 : {
				slidesPerView: 2.0,
			},
			640: { 
				slidesPerView: 1.5,
			},
			480: { 
				slidesPerView: 1.3,
				spaceBetween: 50
			},
			360: { 
				slidesPerView: 1.2,
				spaceBetween: 20
			},
			0: { 
				slidesPerView: 1.0
			}
		}
	});

	$('.p-types__items').on({
		mouseenter: function() {
			let $self = $(this);
			$self
				.height($self.find(':first-child').outerHeight())
				.addClass('hover');
		},
		mouseleave: function() {
			$(this)
				.css('height', 'auto')
				.removeClass('hover');
		}
	}, '.p-types__item');

})();