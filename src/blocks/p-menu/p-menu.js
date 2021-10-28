import scrollLock from 'scroll-lock';

(() => {
	
	$('.p-menu__open, .p-menu__close').on('click', function(e) {
		let $shell = $('.p-menu');
		
		$shell.fadeToggle(400, function() {
			if(scrollLock.getScrollState()) {
				scrollLock.disablePageScroll();
				return;
			}

			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		});
	});

})();
