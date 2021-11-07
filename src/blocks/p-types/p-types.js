import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	let $all = $('.p-types__count').find('span:last-child');
	let $current = $('.p-types__count').find('span:first-child');
	let total = $('.p-types__items').find('.p-types__item').length;

	new Swiper('.p-types__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		navigation: {
			nextEl: '.p-types__arr_next',
			prevEl: '.p-types__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				$all.text(total);
			},
			slideChange: function(swiper) {
				$current.text((swiper.activeIndex % total) || total);
			}
		},
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