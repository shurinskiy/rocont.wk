import scrollLock from 'scroll-lock';

(() => {
	let $shell = $('.header__menu');
	let $toggle = $('.header__menu-toggle');
	let vh = window.innerHeight * 0.01; // решение проблемы 100vh для меню на мобильных устройствах
	
	$('.header__search').on('click', 'input[type="submit"]', function(e) {
		let $self = $(this);
		let $text = $self.prev('input[type="text"]');
		let width = parseInt($self.css('width') + 10);
		let width_text = parseInt($text.css('width'));

		$text.trigger('focus');
		
		if (e.target.type == 'submit' && width_text <= width) {
			return false;
		}
	});

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');
		
		if($shell.hasClass('opened')) {
			$shell.css({'max-width': parseInt($shell.css('max-width')) + scrollLock.getPageScrollBarWidth()});
			scrollLock.disablePageScroll();
			return;
		}

		$shell.removeAttr('style');
		scrollLock.clearQueueScrollLocks();
		scrollLock.enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened').removeAttr('style');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});

	$(".footer__up-btn").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});	
	
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

})();
