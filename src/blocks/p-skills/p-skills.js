import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	// let $all = $('.p-skills__count').find('span:last-child');
	// let $current = $('.p-skills__count').find('span:first-child');
	// let total = $('.p-skills__slider').find('.p-skills__item').length;

	new Swiper('.p-skills__slider', {
		loop: true,
		speed: 800,
		spaceBetween: 50,
		navigation: {
			nextEl: '.p-skills__arr_next',
			prevEl: '.p-skills__arr_prev',
		},
		/* on: {
			beforeInit: function(swiper) {
				$all.text(total);
			},
			slideChange: function(swiper) {
				$current.text((swiper.activeIndex % total) || total);
			}
		}, */
		breakpoints: {
			1280: { 
				slidesOffsetBefore: 300,
				slidesPerView: 3.0,
				spaceBetween: 50,
			},
			1100: { 
				slidesOffsetBefore: 160,
				slidesPerView: 2.8,
				spaceBetween: 50,
			},
			960: { 
				centeredSlides: false,
				slidesOffsetBefore: 110,
				slidesPerView: 2.6,
				spaceBetween: 30,
			},
			780 : {
				slidesOffsetBefore: false,
				centeredSlides: true,
				slidesPerView: 2.0,
				spaceBetween: 30,
			},
			640: { 
				slidesPerView: 1.8,
				spaceBetween: 20
			},
			480: { 
				slidesOffsetBefore: 100,
				slidesPerView: 1.2,
				spaceBetween: 20
			},
			360: { 
				slidesOffsetBefore: false,
				slidesPerView: 1.0,
				spaceBetween: 20
			},
			0: { 
				centeredSlides: false,
				slidesPerView: 1.0,
				spaceBetween: 20
			}
		}
	});

})();