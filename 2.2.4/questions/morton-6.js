/*
Write a function which calculates the Morton Number from two 8-bit integers. 

In a Morton Number, the bits of two numbers are interleaved.
So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).
*/

let v15 = 0b00001111;
let a15 = 0b0000000010101010;
//          1234567890123456

let v48 = 0b00110000;
let a48 = 0b0000010100000000;
//          1234567890123456

let actual = 0b0000010110101010;
trace("actual ", actual);

let a15_48 = a15 | a48;
trace("a15_48 ", a15_48);
if (a15_48 !== actual) {
	console.error("ERROR; a15_48 ", a15_48, " should be ", actual);
}

const mask = [];
for (let j = 0; j < 20; j++) {
	mask[j] = Math.pow(2, j);
}
// mask.map((item, idx) => {
// 	console.log(idx, " mask ", item);
// });

function trace(msg, value) {
	console.log(`${msg}, value ${value}, ${value.toString(2)}`);
}

function isBit(num, bit) {
	return !!(num & mask[bit - 1]);
}
function setBit(num, bit) {
	return num | mask[bit - 1];
}

function transform(num, move) {
	let result = 0;
	for (let i = 1; i < 18; i++) {
		if (isBit(num, i)) {
			let j = move ? i * 2 : i * 2 - 1;
			result = setBit(result, j);
		}
	}
	// trace("transform; num ", num);
	// trace("transform; result ", result);
	return result;
}

function morton(num1, num2) {
	return transform(num1, false) | transform(num2, true);
}

let total = morton(v48, v15);
trace("total ", total);
if (total !== actual) {
	console.error("ERROR; total ", total, " should be ", actual);
}
