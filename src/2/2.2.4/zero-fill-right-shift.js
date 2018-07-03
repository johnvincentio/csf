//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Modify your existing shift function to also calculate a zero-fill right-shifted value.

Compare the values which you get from your three different type of shift operator.

*/

function checker(num, shift) {
	return num * Math.pow(2, shift);
}

function leftShift(num, shift) {
	return num << shift;
}

function rightShift(num, shift) {
	return num >> shift;
}

function zeroShift(num, shift) {
	return num >>> shift;
}

function exercise(item, shift) {
	const left = leftShift(item, shift);
	const right = rightShift(item, shift);
	const zero = zeroShift(item, shift);
	// prettier-ignore
	console.log(`shift ${shift}, item ${item}, ${item.toString(2)} 
		left ${left}, ${left.toString(2)} right ${right}, ${right.toString(2)} zero ${zero}, ${zero.toString(2)}
	`);
}

const arr = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
// const arr = [0, 1, 2, 10, 255, 256, -1];
arr.map(item => {
	let shift = 0;
	do {
		exercise(item, shift);
		shift++;
	} while (shift < 5);
	return true;
});

exercise(11, 4);

exercise(-11, 4);

exercise(-33, 4);
