//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which calculates the Morton Number from two 8-bit integers.

In a Morton Number, the bits of two numbers are interleaved.
So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).
*/

function leftShift(num, shift) {
	return num << shift;
}

function double(num) {
	const result = leftShift(num, 1);
	console.log(`num ${num} ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

function isSet(num, bit) {
	const mask = 2 ** bit;
	return !!(num & mask);
}

function morton(num1, num2) {
	console.log(`>>> morton; num1 ${num1} ${num1.toString(2)} num2 ${num2}, ${num2.toString(2)}`);
	const result = 0;
	console.log(`<<< morton; result ${result}, ${result.toString(2)}`);
	return result;
}

const num1 = 48;
const num2 = 15;

const total = morton(num1, num2);

const actual = 1450;

if (total !== actual) {
	console.error('ERROR; total ', total, ' should be ', actual);
}
