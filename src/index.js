module.exports = function toReadable(number) {
	const ones = {
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
	const teens = {
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
	const tens = {
		10: 'ten',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	};
	const numStr = number.toString();
	if (number === 0) {
		return 'zero';
	}
	if (ones[number]) {
		return ones[number];
	}
	if (teens[number]) {
		return teens[number];
	}
	if (tens[number]) {
		return tens[number];
	}
	if (numStr.length == 2 && numStr[0] > 1) {
		return tens[numStr[0] * 10] + ' ' + ones[numStr[1]];
	}
	if (numStr.length == 3) {
		const hundred = ones[numStr[0]] + ' hundred';
		const twoNum = numStr.slice(1);
		if (ones[number / 100]) {
			return hundred;
		}
		if (twoNum < 10) {
			return hundred + ' ' + ones[twoNum.replace(/^0+/, '')];
		}
		if (teens[twoNum]) {
			return hundred + ' ' + teens[twoNum];
		}
		if (tens[twoNum]) {
			return hundred + ' ' + tens[twoNum];
		}
		if (twoNum[0] > 1) {
			return hundred + ' ' + tens[twoNum[0] * 10] + ' ' + ones[twoNum[1]];
		}
	}
};
