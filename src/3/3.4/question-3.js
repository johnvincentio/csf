//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find the third largest node in a binary search tree.

Assume this means node with the 3rd largest number of children.

												10
											/	   \
										  1    11
											 \			\
												3		 14
												/ 	/
												2	 12
*/

const BinarySearchTree = require('./binary-search-tree.js');

function exercise() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(1);
	binarySearchTree.insertKey(11);
	binarySearchTree.insertKey(14);
	binarySearchTree.insertKey(12);
	binarySearchTree.insertKey(3);
	binarySearchTree.insertKey(2);

	const arr = [];
	binarySearchTree.nodeCounter(binarySearchTree, arr);
	arr.sort((a, b) => a.counter < b.counter);
	console.log('Third largest node ', arr[2]);
}

exercise();
