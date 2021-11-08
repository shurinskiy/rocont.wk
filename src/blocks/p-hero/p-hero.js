(() => {
	$(".p-hero__down").on('click', function(e) {
		e.preventDefault();
		var $element = $(`.${this.dataset.anchor}`);
	
		$("html, body").animate({ scrollTop: $element.offset().top - 20 }, "slow");
	});	

})();
