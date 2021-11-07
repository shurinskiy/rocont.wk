import Swiper, { Navigation, Autoplay } from 'swiper/core';
Swiper.use([Navigation, Autoplay]);

(() => {
	let $all = $('.h-hero__count').find('span:last-child');
	let $current = $('.h-hero__count').find('span:first-child');
	let total = $('.h-hero__slider').find('.h-hero__item').length;

	new Swiper('.h-hero__slider', {
		loop: true,
		speed: 800,
		navigation: {
			nextEl: '.h-hero__arr_next',
			prevEl: '.h-hero__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				$all.text(total);
			},
			slideChange: function(swiper) {
				$current.text((swiper.activeIndex % total) || total);
			}
		},
		autoplay: {
			delay: 20000,
			disableOnInteraction: false
		},
	});

})();