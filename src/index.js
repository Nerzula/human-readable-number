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

	if (str.length == 1) return o[num - 1];

	if (str.length == 2) {
		if (str[0] == 1) {
			res = p[parseInt(str[1]) - 1];
		} else {
			res =
				t[parseInt(str[0]) - 1] +
				(str[1] != '0' ? ' ' + o[parseInt(str[1]) - 1] : '');
		}
	}
	if (str.length == 3) {
		res =
			h[parseInt(str[0]) - 1] +
			(str[1] != '0' ? ' ' + t[parseInt(str[1]) - 1] : '') +
			(str[2] != '0' ? ' ' + o[parseInt(str[2]) - 1] : '');
	}
};
