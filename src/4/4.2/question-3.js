//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Imagine that I gave you twenty books to sort in alphabetical order.

How would you go about it? Can you express this as an algorithm?
*/

/*

Take a book. Place in the middle.

Loop:
	Take next book. 
	if > middle
		cycle through items to the right, inserting before book is > than current book
	else
		cycle through items to the left, inserting after book is > than current book
	endif

*/

/*

Take a book. Place at the start.

Loop:
	Take next book.
	Loop from start, 
		if book > current book
			insert before current book.
		else
			append to end

*/

/*

bubble sort the array


*/

const bubbleSort = require('./bubble-sort.js');

// prettier-ignore
const books = ['G','P','Q','B','Y','I','A','R','C','W','U','D','Z','T','K','V','F','X','N','H'];

function test1() {
	const arr = books.slice(0);
	arr.sort();
	console.log('test1; sorted ', arr);
}

function test2() {
	const arr = books.slice(0);
	bubbleSort.sort(arr);
	console.log('test2; sorted ', arr);
}

test1();

test2();
