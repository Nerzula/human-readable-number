module.exports = function toReadable(number) {
	const h = [
			'one hundred',
			'two hundred',
			'three hundred',
			'four hundred',
			'five hundred',
			'six hundred',
			'seven hundred',
			'eight hundred',
			'nine hundred',
		],
		t = [
			'',
			'twenty',
			'thirty',
			'fourty',
			'fifty',
			'sixty',
			'seventy',
			'eighty',
			'ninety',
		],
		o = [
			'one',
			'two',
			'three',
			'four',
			'five',
			'six',
			'seven',
			'eight',
			'nine',
			'ten',
		],
		p = [
			'eleven',
			'twelve',
			'thirteen',
			'fourteen',
			'fifteen',
			'sixteen',
			'seventeen',
			'eighteen',
			'nineteen',
		];
	let res = '';
	const str = num.toString();

	if (num === 10) return 'Ten';
};
