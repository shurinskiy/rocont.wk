import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	let $all = $('.p-achieve__count').find('span:last-child');
	let $current = $('.p-achieve__count').find('span:first-child');
	let total = $('.p-achieve__items').find('.p-achieve__item').length;

	new Swiper('.p-achieve__items', {
		loop: true,
		speed: 800,
		spaceBetween: 50,
		navigation: {
			nextEl: '.p-achieve__arr_next',
			prevEl: '.p-achieve__arr_prev',
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
				slidesOffsetBefore: false,
				slidesPerView: 4.0,
			},
			1100: { 
				slidesOffsetBefore: 160,
				slidesPerView: 3.0,
			},
			960: { 
				slidesOffsetBefore: false,
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

})();