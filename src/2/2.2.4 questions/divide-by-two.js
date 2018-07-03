//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which divides an integer by two, rounding down.
*/

function rightShift(num, shift) {
	return num >> shift;
}

function divideByTwo(num) {
	const result = rightShift(num, 1);
	console.log(`num ${num} ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

const arr = [-1000000, -30000, -1, 1, 0, 1, 2, 10, 25, 100, 255, 256, 30000, 60000, 100000000000];
arr.map(item => {
	divideByTwo(item);
});
