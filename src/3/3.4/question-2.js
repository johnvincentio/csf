//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to check whether an arbitrary binary tree is a binary search tree, 
assuming the tree does not contain duplicates.

Verify left node key is < parent key
*/

const BinarySearchTree = require('./binary-search-tree.js');

function test1() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(1);
	binarySearchTree.insertKey(11);
	binarySearchTree.insertKey(14);
	binarySearchTree.insertKey(12);
	binarySearchTree.insertKey(3);
	binarySearchTree.insertKey(2);
	binarySearchTree.checkBinarySearchTree();
}

function test2() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertBrokenTree(10, 'x');
	binarySearchTree.insertBrokenTree(1, 'x');
	binarySearchTree.insertBrokenTree(11, 'x');
	binarySearchTree.insertBrokenTree(14, 'x');
	binarySearchTree.insertBrokenTree(12, 'x');
	binarySearchTree.insertBrokenTree(3, 'x');
	binarySearchTree.insertBrokenTree(2, 'x');
	binarySearchTree.checkBinarySearchTree();
}

test1();
test2();
