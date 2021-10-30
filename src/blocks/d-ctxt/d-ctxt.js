import Swiper from 'swiper/core';

(() => {
	let $cards = $('.d-ctxt__items');

	new Swiper('.d-ctxt__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		threshold: 5,
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

	$cards.on('click', '.d-ctxt__item', function(e) {
		let $hidden = $(this).find('.d-ctxt__hidden');
		let opened = $(this).hasClass('opened');
		
		if (e.target.closest('.d-ctxt__hidden')) return;

		// чтобы кнопка срабатывала только в открытом положении
		if (!opened) {
			e.preventDefault();
		} else if(e.target.closest('.d-ctxt__button')) {
			return;
		}

		$cards
			.find('.d-ctxt__hidden:visible')
			.not($hidden)
			.slideUp(function() {
				$(this)
					.parents('.d-ctxt__item')
					.removeClass('opened');
			});

		if (opened) {
			$hidden
				.slideUp(function() {
					$(this)
						.parents('.d-ctxt__item')
						.removeClass('opened');
					});
			return;
		}

		$hidden.slideDown().parents('.d-ctxt__item').addClass('opened');
	});

})();
