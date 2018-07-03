//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find the middle element of a linked list without 
using the .length property
*/

const LinkedList = require('./linked-list.js');

function testInsert() {
	const linkedList = new LinkedList();
	linkedList.list();

	linkedList.insert(0, 'T');
	linkedList.insert(1, 'D');
	linkedList.insert(2, 'P');
	linkedList.insert(3, 'M');
	linkedList.insert(4, 'Y');

	linkedList.list();
}

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
