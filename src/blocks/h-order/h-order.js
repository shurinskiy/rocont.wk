(() => {
	$('.h-order__agree-check[type="checkbox"]').on('change', function(e) {
		const $self = $(this);
		$self.parents('form').find('button[type="submit"]').prop('disabled', !$self.is(':checked'));
	});

})();
