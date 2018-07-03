//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.

For example, if the input was [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).
*/

function product(arr, index) {
	let total = 0;
	arr.forEach((element, idx) => {
		if (idx !== index) {
			total += element;
		}
	});
	return total;
}

function exercise(arr) {
	let idx = 0;
	const ans = [];
	while (arr[idx]) {
		ans.push(product(arr, idx++));
	}
	console.log(`ans ${ans}`);
	return ans;
}

exercise([]); // []
exercise([1]); // [0]
exercise([1, 3]); // [3, 1]
exercise([1, 3, 5]); // [8, 6, 4]
