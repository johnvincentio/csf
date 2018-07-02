//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write a function which doubles an integer
*/

function leftShift(num, shift) {
	return num << shift;
}

function double(num) {
	const result = leftShift(num, 1);
	console.log(`num ${num} ${num.toString(2)} result ${result}, ${result.toString(2)}`);
}

const arr = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
// const arr = [0, 1, 2, 10, 255, 256, -1];
arr.map(item => {
	double(item);
});
