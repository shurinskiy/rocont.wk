import "inputmask/lib/jquery.inputmask";

(() => {
	$('input[type="tel"]').inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});
})();