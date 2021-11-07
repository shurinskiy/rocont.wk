(() => {
	
	$('input.js-range').each(function(index) {
		$(this)
			.addClass('range__input')
			.wrap('<label class="range">')
			.parent('.range')
			.prepend('<span class="range__scale"></span><span class="range__handler"></span>');
		
		const $range = $(this);
		const min = $range.attr('min') || 0;
		const max = $range.attr('max') || 100;
		const round = 10**(min.length - 1);
		const numeral = $range.data("numeral");
		const $scale = $range.parent('.range').find('.range__scale');
		const $handler = $range.parent('.range').find('.range__handler');
		const $output = $range.parents('.h-calculation__range').find('.h-calculation__range-out input');

		const getPercentage = (value) => {
			value = value || 0;
			return Math.floor((value - min)*100/(max - min))+'%';
		}

		const getRound = (a) => Math.round(a / round) * round;

		const declOfNum = (n, data) => { 
			if (!data) { return '' };

			const text_forms = data.split(",");
			n = Math.abs(n) % 100; 
			const n1 = n % 10;

			if (n > 10 && n < 20) { return text_forms[2].trim(); }
			if (n1 > 1 && n1 < 5) { return text_forms[1].trim(); }
			if (n1 == 1) { return text_forms[0].trim(); }
			return text_forms[2].trim();
		}

		const setSize = function() {
			const $inp = $(this);
			$inp.css('width', `${$inp.val().length}ch`);
		}

		const setValue = function(e) {
			const value = e?.target.value ?? $(this).val();
			const percent = getPercentage(value);

			$scale.css({width: percent});
			$handler.css({left: percent});
			// $output.val(`${getRound(value)}`).next('span').text(`${declOfNum($range.val(), numeral)}`);
			$output.val(`${new Intl.NumberFormat('ru-RU').format(getRound(value))}`).next('span').text(`${declOfNum($range.val(), numeral)}`);
			setSize.call($output);
		}

		const setRange = function(e) {
			// $range.val(e?.target.value);
			$range.val(e?.target.value.replace(/\s+/g, ''));
			setValue.call($range);
		}

		$output.on('change input', setSize);
		$output.on('change input', setRange);
		$range.on('change input', setValue);
		setSize.call($output);
		setValue.call($range);
	});
})();