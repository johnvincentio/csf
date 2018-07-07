/*
sorting algorithm not a bubble sort
*/

function sort(cntr, arr) {
	console.log('>>> sort; cntr ', cntr, ' arr ', arr);
	if (!arr) {
		return null;
	}
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);

	let left = arr.slice(0, mid);
	let right = arr.slice(mid, arr.length);
	console.log('	(before) left ', left, ' right ', right);

	left = sort(cntr + 1, left);
	right = sort(cntr + 1, right);
	console.log('	(after) left ', left, ' right ', right);

	const newarr = mergeSort(cntr + 1, left, right, arr);
	console.log('<<< sort; cntr ', cntr, ' newarr ', newarr);
	return newarr;
}

function mergeSort(cntr, left, right, arr) {
	console.log('>>> mergeSort; cntr ', cntr, ' left ', left, ' right ', right, ' arr ', arr);
	let leftIdx = 0;
	let rightIdx = 0;
	let arrIdx = 0;
	while (leftIdx < left.length && rightIdx < right.length) {
		if (left[leftIdx] < right[rightIdx]) {
			arr[arrIdx++] = left[leftIdx++];
		} else {
			arr[arrIdx++] = right[rightIdx++];
		}
	}
	for (let i = leftIdx; i < left.length; i++) {
		arr[arrIdx++] = left[i];
	}
	for (let i = rightIdx; i < right.length; i++) {
		arr[arrIdx++] = right[i];
	}
	console.log('<<< mergeSort; arr ', arr);
	return arr;
}

// console.log('test1 ', sort(null));
// console.log('test2 ', sort([]));
// console.log('test3 ', sort([4]));
// console.log('test4 ', sort([4, 2]));
// console.log('test5 ', sort([3, 4]));

// console.log('test4 ', sort(0, [4, 2, 3]));
console.log('test4a ', sort(0, [4, 3, 2]));

// console.log('test6 ', sort([4, 2, 7, 4, 9, 6]));
// console.log('test7 ', sort([4, 2, 7, 4, 9, 6, 5]));
