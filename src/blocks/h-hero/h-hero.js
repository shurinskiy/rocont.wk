import Swiper, { Navigation, Autoplay } from 'swiper/core';
Swiper.use([Navigation, Autoplay]);

(() => {
	new Swiper('.h-hero__slider', {
		loop: true,
		speed: 800,
		navigation: {
			nextEl: '.h-hero__arr_next',
			prevEl: '.h-hero__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				$('.h-hero__count').find('span').text(swiper.$el.find('.swiper-slide').length);
			},
		},
		autoplay: {
			delay: 20000,
			disableOnInteraction: false
		},
	});

})();