import Swiper, { Navigation } from 'swiper/core';
import { Fancybox } from "@fancyapps/ui";

(() => {
	new Swiper('.p-gallery__slider', {
		loop: true,
		speed: 800,
		threshold: 5,
		spaceBetween: 4,
		navigation: {
			nextEl: '.p-gallery__arr_next',
			prevEl: '.p-gallery__arr_prev',
		},
		breakpoints: {
			1280: { 
				slidesPerView: 4,
			},
			1100: { 
				slidesPerView: 3.5,
			},
			960: { 
				slidesPerView: 2.5,
			},
			780: { 
				slidesPerView: 2.2,
			},
			640: { 
				slidesPerView: 1.7,
			},
			480: { 
				slidesPerView: 1.5,
			},
			0: { 
				slidesPerView: 1.2,
			}
		}
	});

	Fancybox.bind('[data-fancybox="p-gallery"]', {
		Toolbar: false,
		animated: false,
		Thumbs: false,
		dragToClose: false,
	
		showClass: false,
		hideClass: false,
	
		closeButton: "top",
	
		Image: {
			click: "close",
			wheel: "slide",
			zoom: false,
			// fit: "cover",
		},
	});

})();
