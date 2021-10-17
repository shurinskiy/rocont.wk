import Swiper from 'swiper/core';

(() => {
	new Swiper('.p-achieve__items', {
		loop: true,
		speed: 800,
		spaceBetween: 50,
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