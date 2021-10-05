import scrollLock from 'scroll-lock';

(() => {
	let $shell = $('.header__menu');
	let $toggle = $('.header__menu-toggle');
	
	$('.header__search').on('click', 'input[type="submit"]', function(e) {
		let $self = $(this);
		let $text = $self.prev('input[type="text"]');
		let width = parseInt($self.css('width'));
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
			scrollLock.disablePageScroll();
			return;
		}
		
		scrollLock.enablePageScroll();
	});

	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened');
			scrollLock.enablePageScroll();
		}
	});

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var $element = $($(this).attr('href'));
	
		$("html, body").animate({ scrollTop: $element.offset().top }, "slow");
	});

})();
