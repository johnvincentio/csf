//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find whether a linked list has a cycle 
(i.e. whether a node in the list has its next value pointing to an 
earlier node in the list)
*/

const LinkedList = require('./linked-list.js');

function test1() {
	const linkedList = new LinkedList();
	linkedList.createLoop();
	linkedList.checkLoop();
}

test1();
