//module.exports =
function toReadable(num) {
	const h = {
			1: 'one hundred',
			2: 'two hundred',
			3: 'three hundred',
			4: 'four hundred',
			5: 'five hundred',
			6: 'six hundred',
			7: 'seven hundred',
			8: 'eight hundred',
			9: 'nine hundred',
		},
		t = {
			10: 'ten',
			20: 'twenty',
			30: 'thirty',
			40: 'forty',
			50: 'fifty',
			60: 'sixty',
			70: 'seventy',
			80: 'eighty',
			90: 'ninety',
		},
		o = {
			1: 'one',
			2: 'two',
			3: 'three',
			4: 'four',
			5: 'five',
			6: 'six',
			7: 'seven',
			8: 'eight',
			9: 'nine',
		};
	p = {
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
	};
	const str = num.toString();
	if (str.length == 1) res += o[num];
	if (str.length == 2 && num > 10 && num < 20) return p[num];
	if (str.length == 2 && num >= 10) return t[num];
	if (str.length == 3) {
		let firstNum = str.slice(0, 1);
		let twoNum = str.slice(1);
		if (twoNum < 10) {
			return h[firstNum] + ' ' + o[twoNum];
		}
		if (twoNum > 10 && twoNum < 20) {
			return h[firstNum] + ' ' + p[twoNum];
		}
		if (twoNum >= 10) {
			return h[firstNum] + ' ' + t[twoNum];
		}
	}
}
