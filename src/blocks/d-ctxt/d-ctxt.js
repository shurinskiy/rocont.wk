import Swiper from 'swiper/core';

(() => {
	new Swiper('.d-ctxt__items', {
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

})();
