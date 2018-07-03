//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays
into a single array, which should also be sorted. 

For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], 
your output array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].
*/

function exercise(arr1, arr2) {
	let idx1 = 0;
	let idx2 = 0;
	const ans = [];
	do {
		// console.log(`idx1 ${idx1} value ${arr1[idx1]}, idx2 ${idx2} value ${arr2[idx2]}`);
		if (!arr1[idx1]) {
			ans.push(arr2[idx2++]);
		} else if (!arr2[idx2]) {
			ans.push(arr1[idx1++]);
		} else if (arr2[idx2] < arr1[idx1]) {
			ans.push(arr2[idx2++]);
		} else {
			ans.push(arr1[idx1++]);
		}
	} while (arr1[idx1] || arr2[idx2]);
	console.log(`ans ${ans}`);
	return ans;
}

exercise([], [3, 5, 8, 9, 10]);
exercise([1, 3], []);

exercise([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);
exercise([1, 3], [3, 5, 8, 9, 10]);

exercise([1, 2, 25, 28], [3, 5, 8, 9, 10]);
