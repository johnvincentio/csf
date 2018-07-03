//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Modify your existing shift function to also calculate a right-shifted value.
Compare the values which you get from your left-shift and right-shift functions.
*/

function rightShift(num, shift) {
	return num >> shift;
}

const arr = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
arr.map(item => {
	let shift = 0;
	do {
		const result = rightShift(item, shift);
		console.log(`shift ${shift}, item ${item}, ${item.toString(2)} result ${result}, ${result.toString(2)}`);
		shift++;
	} while (shift < 5);
	return true;
});
