/*
Write a function that takes in a decimal value and a value that represents
the number of bit positions to shift left with.
Return or print out the final base 10 value after the shift.
*/

function leftShift(num, shift) {
	return num << shift;
}

function rightShift(num, shift) {
	return num >> shift;
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
