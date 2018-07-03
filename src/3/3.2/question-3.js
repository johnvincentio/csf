//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to reverse a linked list
*/

const LinkedList = require('./linked-list.js');

function test1() {
	const linkedList = new LinkedList();
	linkedList.load(['S', 'A', 'V', 'E', 'D']);
	console.log(`third from end element ${linkedList.thirdFromEndElement()}`);
}

function test1a() {
	const linkedList = new LinkedList();
	linkedList.load(['S']);
	console.log(`third from end element ${linkedList.thirdFromEndElement()}`);
}

function test1b() {
	const linkedList = new LinkedList();
	linkedList.load([]);
	console.log(`third from end element ${linkedList.thirdFromEndElement()}`);
}

test1();
test1a();
test1b();
