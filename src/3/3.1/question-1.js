//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.

You shouldn't use the .filter method here; try to write the algorithm from scratch.
*/

const ans = [];
const arr = [-1000000, -30000, -1, 1, 10, 25, 100, 30000, 60000, 100000000000];
arr.map(item => {
	if (item > 4) {
		ans.push(item);
	}
});
console.log(`ans ${ans}`);
