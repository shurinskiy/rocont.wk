import Swiper, { Navigation } from 'swiper/core';
Swiper.use([Navigation]);

(() => {
	let $count_all = $('.p-types__count').find('span:last-child');
	let $count_current = $('.p-types__count').find('span:first-child');
	let count_total = $('.p-types__items').find('.p-types__item').length;
	let $cards = $('.p-types__items');

	new Swiper('.p-types__items', {
		loop: true,
		speed: 800,
		spaceBetween: 30,
		threshold: 5,
		navigation: {
			nextEl: '.p-types__arr_next',
			prevEl: '.p-types__arr_prev',
		},
		on: {
			beforeInit: function(swiper) {
				$count_all.text(count_total);
			},
			slideChange: function(swiper) {
				$count_current.text((swiper.activeIndex % count_total) || count_total);
			}
		},
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

	
	$cards.on('click', '.p-types__item', function(e) {
		let $hidden = $(this).find('.p-types__hidden');
		let opened = $(this).hasClass('opened');
		
		if (e.target.closest('.p-types__hidden')) return;

		// чтобы кнопка срабатывала только в открытом положении
		if (!opened) {
			e.preventDefault();
		} else if(e.target.closest('.p-types__button')) {
			return;
		}

		$cards
			.find('.p-types__hidden:visible')
			.not($hidden)
			.slideUp(function() {
				$(this)
					.parents('.p-types__item')
					.removeClass('opened');
			});

		if (opened) {
			$hidden
				.slideUp(function() {
					$(this)
						.parents('.p-types__item')
						.removeClass('opened');
					});
			return;
		}

		$hidden.slideDown().parents('.p-types__item').addClass('opened');
	});


	/* $('.p-types__items').on({
		mouseenter: function() {
			let $self = $(this);
			$self
				.height($self.find(':first-child').outerHeight())
				.addClass('hover');
		},
		mouseleave: function() {
			$(this)
				.css('height', 'auto')
				.removeClass('hover');
		}
	}, '.p-types__item'); */

})();