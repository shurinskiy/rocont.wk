import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	new Swiper('.h-blog__slider', {
		loop: true,
		speed: 800,
		spaceBetween: 45,
		slidesPerView: 3,
		navigation: {
			nextEl: '.h-blog__arr_next',
			prevEl: '.h-blog__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				$('.h-blog__count').find('span').text(swiper.$el.find('.swiper-slide').length);
			},
		},
		breakpoints: {
			1100: { 
				slidesPerView: 3,
			},
			960: { 
				slidesPerView: 2,
			},
			780: { 
				slidesPerView: 3,
			},
			640: { 
				spaceBetween: 40,
				slidesPerView: 2,
			},
			480: { 
				spaceBetween: 20,
				slidesPerView: 2,
			},
			0: { 
				spaceBetween: 20,
				slidesPerView: 1,
			}
		}
	});

})();