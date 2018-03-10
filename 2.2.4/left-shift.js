/*
Write a function that takes in a decimal value and a value that represents
the number of bit positions to shift left with.
Return or print out the final base 10 value after the shift.
*/

function checker(num, shift) {
	return num * Math.pow(2, shift);
}

function leftShift(num, shift) {
	return num << shift;
}

function test(shift) {
	console.log("Shift ", shift);
	let test = 0;
	do {
		test++;
		let result = leftShift(test, shift);
		console.log(`exercise; test ${test}, ${test.toString(2)} result ${result}, ${result.toString(2)}`);

		let checked = checker(test, shift);
		console.log(`checker; test ${test}, ${test.toString(2)} checked ${checked}, ${checked.toString(2)}`);
		if (checker(test, shift) !== result) {
			console.error("ERROR");
		}
	} while (test < 20);
}

let shift = 0;
do {
	test(++shift);
} while (shift < 5);

checker(1, 1);
checker(7, 1);
checker(15, 1);
checker(31, 1);

checker(1, 2);
checker(7, 2);
checker(15, 2);
checker(31, 2);
