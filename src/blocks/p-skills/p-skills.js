import Swiper from 'swiper/core';

(() => {
	new Swiper('.p-skills__slider', {
		loop: true,
		speed: 800,
		spaceBetween: 50,
		slidesOffsetBefore: 300,
		breakpoints: {
			1280: { 
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
				slidesOffsetBefore: 100,
				slidesPerView: 1.0,
				spaceBetween: 20
			},
			0: { 
				slidesOffsetBefore: false,
				centeredSlides: false,
				slidesPerView: 1.0,
				spaceBetween: 20
			}
		}
	});

})();