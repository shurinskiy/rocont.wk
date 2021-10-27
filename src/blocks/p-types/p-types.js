import Swiper from 'swiper/core';

(() => {
	new Swiper('.p-types__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		breakpoints: {
			1280: { 
				slidesPerView: 3.0,
			},
			1100: { 
				slidesPerView: 2.5,
			},
			960: { 
				slidesPerView: 2.3,
			},
			780 : {
				slidesPerView: 1.8,
			},
			640: { 
				slidesPerView: 1.5,
			},
			480: { 
				slidesPerView: 1.3,
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