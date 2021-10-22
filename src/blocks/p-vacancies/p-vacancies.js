(() => {

	$('.p-vacancies__more').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('opened').parent('.p-vacancies__item').find('.p-vacancies__hidden').slideToggle();
	})

})();
