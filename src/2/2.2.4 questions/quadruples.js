//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which quadruples an integer.
*/

function leftShift(num, shift) {
	return num << shift;
}

function quadruples(num) {
	const result = leftShift(num, 2);
	console.log(`num ${num} ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

const arr = [-1000000, -30000, -1, 1, 0, 1, 2, 10, 25, 100, 255, 256, 30000, 60000, 100000000000];
arr.map(item => {
	quadruples(item);
});
