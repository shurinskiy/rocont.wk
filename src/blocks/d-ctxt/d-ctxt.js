import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	// let $count_all = $('.d-ctxt__count').find('span:last-child');
	// let $count_current = $('.d-ctxt__count').find('span:first-child');
	// let count_total = $('.d-ctxt__items').find('.d-ctxt__item').length;
	let $cards = $('.d-ctxt__items');

	new Swiper('.d-ctxt__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		threshold: 5,
		navigation: {
			nextEl: '.d-ctxt__arr_next',
			prevEl: '.d-ctxt__arr_prev',
		},
		/* on: {
			beforeInit: function(swiper) {
				$count_all.text(count_total);
			},
			slideChange: function(swiper) {
				$count_current.text((swiper.activeIndex % count_total) || count_total);
			}
		}, */
		breakpoints: {
			1280: { 
				enabled: false,
				slidesPerView: 3.0,
			},
			1100: { 
				enabled: true,
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
				enabled: true,
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

	/* $cards.on('change', '.d-ctxt__agree-check[type="checkbox"]', function(e) {
		const $self = $(this);
		$self.parents('form').find('button[type="submit"]').prop('disabled', !$self.is(':checked'));
	}); */

})();
