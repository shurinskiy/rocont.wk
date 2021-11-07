import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	let $all = $('.h-blog__count').find('span:last-child');
	let $current = $('.h-blog__count').find('span:first-child');
	let total = $('.h-blog__slider').find('.h-blog__item').length;

	new Swiper('.h-blog__slider', {
		loop: true,
		speed: 800,
		spaceBetween: 45,
		navigation: {
			nextEl: '.h-blog__arr_next',
			prevEl: '.h-blog__arr_prev',
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