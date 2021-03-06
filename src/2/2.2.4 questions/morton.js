//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which calculates the Morton Number from two 8-bit integers.

In a Morton Number, the bits of two numbers are interleaved.
So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).

const num1 = 15;
// 00001111
// 76543210
const num2 = 48;
// 00110000
// 76543210
const actual = 1450;
// const bActual = 0b0000010110101010;
// 0000010110101010;
//  0  0  0  0  0  1  0  1  1  0  1  0  1  0  1  0
// A7 B7 A6 B6 A5 B5 A4 B4 A3 B3 A2 B2 A1 B1 A0 B0
//  0  0  0  0  0  1  0  1  1  0  1  0  1  0  1  0
*/

function isSet(num, bitPosition) {
	return !!(num & (2 ** bitPosition));
}

function clearBit(number, bitPosition) {
	const mask = ~(1 << bitPosition);
	return number & mask;
}

function setBit(number, bitPosition) {
	return number | (1 << bitPosition);
}

function updateBit(number, bitPosition, bitValue) {
	const bitValueNormalized = bitValue ? 1 : 0;
	const clearMask = ~(1 << bitPosition);
	return (number & clearMask) | (bitValueNormalized << bitPosition);
}

function getBit(number, bitPosition) {
	return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}

function morton(num1, num2) {
	console.log(`>>> morton; num1 ${num1} ${num1.toString(2)} num2 ${num2}, ${num2.toString(2)}`);
	let result = 0;
	for (let i = 7; i >= 0; i--) {
		result <<= 1;
		result += getBit(num1, i);
		result <<= 1;
		result += getBit(num2, i);
		// console.log(`result ${result}, ${result.toString(2)}`);
	}
	console.log(`<<< morton; result ${result}, ${result.toString(2)}`);
	return result;
}

const num1 = 15;
const num2 = 48;
const actual = 1450;

const total = morton(num1, num2);
if (total !== actual) {
	console.error(`ERROR; total ${total} ${total.toString(2)} actual ${actual}, ${actual.toString(2)}`);
}
