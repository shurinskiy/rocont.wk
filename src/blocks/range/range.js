(() => {
	
	$('input.js-range').each(function(index) {
		let $self = $(this);
		let min = $(this).attr('min') || 0;
		let max = $(this).attr('max') || 100;
		let round = 10**(min.length-1);
		let numeral = $self.data("numeral");

		let getPercentage = (value) => {
			value = value || 0;
			return Math.floor((value - min)*100/(max - min))+'%';
		}

		let getRound = (a) => Math.round(a / round) * round;

		let declOfNum = (n, data) => { 
			if (!data) { return '' };

			let text_forms = data.split(",");
			n = Math.abs(n) % 100; 
			let n1 = n % 10;

			if (n > 10 && n < 20) { return text_forms[2].trim(); }
			if (n1 > 1 && n1 < 5) { return text_forms[1].trim(); }
			if (n1 == 1) { return text_forms[0].trim(); }
			return text_forms[2].trim();
		}

		$self
			.addClass('range__input')
			.wrap('<label class="range">')
			.parent('.range')
			.prepend('<span class="range__scale"></span><span class="range__handler"></span>');

		let initial = getPercentage($self.val());
		let $bar = $self.parent('.range');
		let $scale = $bar.find('.range__scale');
		let $handler = $bar.find('.range__handler');
		let $output = $(this)
						.parents('.h-calculation__range-block')
						.find('.h-calculation__range-count span');

		$scale.css({width: initial});
		$handler.css({left: initial});
		$output.text(`${$self.val()} ${declOfNum($self.val(), numeral)}`);
		
		$self.on('change input', function(e) {
			let value = getPercentage(this.value);

			$scale.css({width: value});
			$handler.css({left: value});
			$output.text(`${getRound(this.value)} ${declOfNum(this.value, numeral)}`);
		});
	});
})();