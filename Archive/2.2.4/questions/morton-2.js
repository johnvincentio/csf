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
	console.log("setBit, num ", num, " bit ", bit, " mask ", mask[bit - 1]);
	return num | mask[bit - 1];
}

function isBits(item) {
	for (let i = 1; i <= 16; i++) {
		console.log("isBits; i ", i, isBit(item, i));
	}
}

function testSetBit(item, bit) {
	console.log("testSetBit; bit ", bit);
	trace(" item ", item);
	let result = setBit(item, bit);
	trace(" result ", result);
}

// isBits(1);
// isBits(15);
// isBits(48);

// testSetBit(0b001, 1);
// testSetBit(0b10, 1);
// testSetBit(0b10, 2);
// testSetBit(0b01, 2);
// testSetBit(0b0, 2);

// let a1 = 2 | 0b1;
// trace("a1 ", a1);
