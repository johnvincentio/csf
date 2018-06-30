/*
Write a function which calculates the Morton Number from two 8-bit integers. 

In a Morton Number, the bits of two numbers are interleaved.
So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010).

(00001111) -> (000000001010101)
               012345678901234
(00110000) -> (000010100000000)

(0000010110101010)

*/

function leftShift(num, shift) {
	return num << shift;
}

function rightShift(num, shift) {
	return num >> shift;
}

//let odd = !!(num & 1);
function trace(msg, value) {
	console.log(`${msg}, value ${value}, ${value.toString(2)}`);
}

const mask = [];
for (let j = 0; j < 20; j++) {
	mask[j] = Math.pow(2, j);
}
mask.map((item, idx) => {
	console.log(idx, " mask ", item);
});

/*
play, num1 , value 48, 110000
play, num2 , value 15, 1111
play, num3 , value 30, 11110

transform; num , value 48, 110000
																10100000000
																012345678901
transform; result , value 1280, 10100000000
                                10100000000

transform; num , value 30, 11110
transform; result , value 340, 101010100

play, t1 , value 1280, 10100000000
play, t2 , value 340, 101010100

ans , value 1364, 10101010100
*/

// const mask = [0b00000001, 0b00000010, 0b00000100, 0b00001000, 0b00010000, 0b00100000, 0b01000000, 0b10000000];
// mask.map((item, idx) => {
// 	console.log(idx, " mask ", item);
// });

let val = 1;
trace("val ", val);
let q1 = val | mask[0];
trace("q1", q1);

let q2 = val | 0b1;
trace("q2", q2);

let q3 = 0b010 | 0b010;
trace("q3", q3);

function isBit(num, bit) {
	return !!(num & mask[bit - 1]);
}
function setBit(num, bit) {
	return num | mask[bit];
}
function transform(num, move) {
	let result = 0;
	// trace("play 0", isBit(num, 0));
	// trace("play 1", isBit(num, 1));
	// trace("play 2", isBit(num, 2));
	// trace("play 3", isBit(num, 3));
	for (let i = 1; i < 18; i++) {
		// console.log("i ", i);
		let j = move ? i + 1 : i;
		if (isBit(num, i - 1)) {
			result = setBit(result, j * 2);
			// trace("result ", result);
		}
	}
	trace("transform; num ", num);
	trace("transform; result ", result);
	return result;
}

function play(num1, num2) {
	trace("play, num1 ", num1);
	trace("play, num2 ", num2);

	// let num3 = num2 << 1;
	// trace("play, num3 ", num3);

	let t1 = transform(num1, false);
	let t2 = transform(num2, true);
	trace("play, t1 ", t1);
	trace("play, t2 ", t2);

	let ans = t1 | t2;
	trace("ans ", ans);
	return ans;
}

let v15 = 0b00001111;
let v48 = 0b00110000;

// let ans = play(v48, v15);

transform(0b00110001, false);

// let a1 = transform(v48);
// trace("a1 ", a1);

// play(0b100);

// let mask = 0b100;
// let result = !!(num & mask);

// combine the two numbers...
// let num1 = 0b0000000010101010;
// let num2 = 0b0000010100000000;
// let num3 = num1 | num2;
// trace("num3", num3);

// let num = v48;
// trace("num", num);

// let a1 = rightShift(num, 2);
// trace("a1", a1);
// let a2 = leftShift(a1, 5);
// trace("a2", a2);

// let a1 = rightShift(num, 1);
// trace("a1", a1);
// let a2 = leftShift(a1, 3);
// trace("a2", a2);

// let a2a = leftShift(num, 8);
// console.log(`a2a ${a2a}, ${a2a.toString(2)}`);

// let a3 = rightShift(num, 6);
// console.log(`a3 ${a3}, ${a3.toString(2)}`);

/*
let jv2 = num | ((num << 8) & 0x100f00f00f00f00f);
trace("jv2 ", jv2);

let jv3 = jv2 | ((jv2 << 4) & 0x10c30c30c30c30c3);
trace("jv3 ", jv3);

let jv4 = jv3 | ((jv3 << 2) & 0x1249249249249249);
trace("jv4 ", jv4);
*/

/*
loop from 7 to 0 (position)
for each number, get rightShift(num, loop);

	let mask = 0b100;
	let result = !!(num & mask);
*/

// function exercise(num, num2) {
// 	let result = rightShift(1, num);
// 	console.log(`num ${num}, ${num.toString(2)} result ${result}, ${result.toString(2)}`);
// }

// function jv(loop, num, shift) {
// 	let result = num;
// 	for (let i = 0; i < loop; i++) {
// 		result = rightShift(result, shift);
// 	}
// 	return result;
// }

// const a1 = jv(7, 15, 1);
// console.log(`a1 ${a1}, ${a1.toString(2)}`);

// let num = 0b10101010;
