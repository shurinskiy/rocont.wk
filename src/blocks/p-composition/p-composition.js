import Swiper from 'swiper/core';

(() => {
	new Swiper('.p-composition__items', {
		loop: true,
		speed: 800,
		slidesPerView: 3,
		spaceBetween: 55,
		breakpoints: {
			1280: { 
				enabled: false,
				slidesPerView: 3,
			},
			1100: { 
				enabled: true,
				slidesPerView: 3,
			},
			960: { 
				spaceBetween: 55,
				slidesPerView: 2.5,
			},
			780: { 
				spaceBetween: 40,
				slidesPerView: 2.3,
			},
			640: { 
				spaceBetween: 30,
				slidesPerView: 1.7,
			},
			480: { 
				spaceBetween: 20,
				slidesPerView: 1.5,
			},
			0: { 
				enabled: true,
				spaceBetween: 20,
				slidesPerView: 1.0,
			}
		}
	});

})();
