//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find the third element from the end of a linked 
list without using the .length property
*/

const LinkedList = require('./linked-list.js');

function test1() {
	const linkedList = new LinkedList();
	linkedList.load(['S', 'A', 'V', 'E', 'D']);
	console.log(`middle element ${linkedList.middleElement()}`);
}

function test1a() {
	const linkedList = new LinkedList();
	linkedList.load(['S']);
	console.log(`middle element ${linkedList.middleElement()}`);
}

function test1b() {
	const linkedList = new LinkedList();
	linkedList.load([]);
	console.log(`middle element ${linkedList.middleElement()}`);
}

test1();
test1a();
test1b();
