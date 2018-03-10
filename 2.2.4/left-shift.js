/*
Write a function that takes in a decimal value and a value that represents
the number of bit positions to shift left with.
Return or print out the final base 10 value after the shift.
*/

function checkLeftShift(num, shift) {
	return num * Math.pow(2, shift);
}

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
		let left = leftShift(test, shift);
		let right = rightShift(test, shift);
		console.log(
			`exercise; test ${test}, ${test.toString(2)} left ${left}, ${left.toString(2)} right ${right}, ${right.toString(
				2
			)}`
		);

		let checked = checkLeftShift(test, shift);
		console.log(`checker; test ${test}, ${test.toString(2)} checked ${checked}, ${checked.toString(2)}`);
		if (checked !== left) {
			console.error("ERROR");
		}
	} while (test < 20);
}

let shift = 0;
do {
	test(++shift);
} while (shift < 5);

checkLeftShift(1, 1);
checkLeftShift(7, 1);
checkLeftShift(15, 1);
checkLeftShift(31, 1);

checkLeftShift(1, 2);
checkLeftShift(7, 2);
checkLeftShift(15, 2);
checkLeftShift(31, 2);
