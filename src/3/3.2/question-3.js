//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to reverse a linked list
*/

const LinkedList = require('./linked-list.js');

function test1() {
	const linkedList = new LinkedList();
	linkedList.load(['S', 'A', 'V', 'E', 'D']);
	linkedList.reverse();
	linkedList.list();
}

function test1a() {
	const linkedList = new LinkedList();
	linkedList.load(['S']);
	linkedList.reverse();
	linkedList.list();
}

function test1b() {
	const linkedList = new LinkedList();
	linkedList.load([]);
	linkedList.reverse();
	linkedList.list();
}

function test1c() {
	const linkedList = new LinkedList();
	linkedList.load(['X', 'Y']);
	linkedList.reverse();
	linkedList.list();
}

test1();
test1a();
test1b();
test1c();
