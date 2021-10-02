(() => {
	$('.header__phone').on('click', 'input[type="submit"]', function(e) {
		$(this).prev('input[type="text"]').trigger('focus');
	});

})();
