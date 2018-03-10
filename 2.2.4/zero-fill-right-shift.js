/*
Modify your existing shift function to also calculate a zero-fill right-shifted value.
Compare the values which you get from your three different type of shift operator.

For non-negative numbers, does the zero-fill right shift operator differ from the
right shift operator in terms of producing the end result? 
Why or why not? 
Eg. 11 >>> 4 vs 11 >> 4
*/

function leftShift(num, shift) {
	return num << shift;
}

function rightShift(num, shift) {
	return num >> shift;
}

function zeroFillRightShift(num, shift) {
	return num >>> shift;
}

function test(shift) {
	console.log("Shift ", shift);
	let test = 0;
	do {
		test++;
		let right = rightShift(test, shift);
		console.log(`exercise; test ${test}, ${test.toString(2)} right ${right}, ${right.toString(2)}`);
	} while (test < 20);
}

// let shift = 0;
// do {
// 	test(++shift);
// } while (shift < 5);

let arr = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
arr.map(item => {
	let shift = 0;
	do {
		let result = rightShift(item, shift);
		console.log(`shift ${shift}, item ${item}, ${item.toString(2)} result ${result}, ${result.toString(2)}`);
		shift++;
	} while (shift < 5);
});
