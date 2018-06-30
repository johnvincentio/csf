/*
Write a function which calculates the Morton Number from two 8-bit integers. 

In a Morton Number, the bits of two numbers are interleaved.
So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).

(00001111) -> (000000001010101)
               012345678901234
(00110000) -> (000010100000000)

(0000010110101010)

*/

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
	// console.log("setBit, num ", num, " bit ", bit, " mask ", mask[bit - 1]);
	return num | mask[bit - 1];
}

function transform(num, move) {
	let result = 0;
	// trace("play 0", isBit(num, 0));
	// trace("play 1", isBit(num, 1));
	// trace("play 2", isBit(num, 2));
	// trace("play 3", isBit(num, 3));
	for (let i = 1; i < 18; i++) {
		// console.log("i ", i);
		// let j = move ? i + 1 : i;
		if (isBit(num, i)) {
			let j = move ? i * 2 : i * 2 - 1;
			result = setBit(result, j);
			// trace("result ", result);
		}
	}
	trace("transform; num ", num);
	trace("transform; result ", result);
	return result;
}

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

let ans = transform(v15, true);
if (ans !== a15) {
	console.error("ERROR; ans ", ans, " should be ", a15);
}

ans = transform(v48, false);
if (ans !== a48) {
	console.error("ERROR; ans ", ans, " should be ", a48);
}
