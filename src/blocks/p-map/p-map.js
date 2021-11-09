(() => {

	$('.p-map__flyer').on('click', function(e) {
		let $self = $(this);

		if (!$self.hasClass('opened')) e.preventDefault();

		$self.addClass('opened');
	})

})();