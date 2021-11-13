(() => {
	let $hidden = $('.h-calculation__personals');
	let $toggle = $('.h-calculation__button');

	$toggle.on('click', function(e) {
		if ($hidden.is(":hidden")) {
			e.preventDefault();
			e.stopPropagation();
			$toggle.prev($hidden).slideDown(400, function() {
				$hidden.addClass('opened');	
			});
		}
	});

	$(window).on('click', function(e) {
		if($hidden.hasClass('opened') && !e.target.closest('.h-calculation__personals') && !$(e.target).is($toggle)) {
			e.preventDefault();
			$hidden.slideUp().removeClass('opened');
		}
	});

	/* $('.h-calculation__side').on('change', '.h-calculation__agree-check[type="checkbox"]', function(e) {
		const $self = $(this);
		$self.parents('form').find('button[type="submit"]').prop('disabled', !$self.is(':checked'));
	}); */


})();
