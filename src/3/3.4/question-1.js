//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find the height of a binary search tree
*/

const BinarySearchTree = require('./binary-search-tree.js');

function test1() {
	const binarySearchTree = new BinarySearchTree();
	// console.log('binarySearchTree ', binarySearchTree);
	binarySearchTree.listTree();
	binarySearchTree.treeHeight();
}

function test2() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.listTree();
	binarySearchTree.treeHeight();
}

function test2a() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(5);
	binarySearchTree.listTree();
	binarySearchTree.treeHeight();
}

function test2b() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(5);
	binarySearchTree.insertKey(11);
	binarySearchTree.listTree();
	binarySearchTree.treeHeight();
}

function test2c() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(5);
	binarySearchTree.insertKey(11);
	binarySearchTree.insertKey(6);
	binarySearchTree.listTree();
	binarySearchTree.treeHeight();
}

function test3() {
	const binarySearchTree = new BinarySearchTree();
	binarySearchTree.insertKey(10);
	binarySearchTree.insertKey(1);
	binarySearchTree.insertKey(11);
	binarySearchTree.insertKey(14);
	binarySearchTree.insertKey(12);
	binarySearchTree.insertKey(3);
	binarySearchTree.insertKey(2);

	// console.log('binarySearchTree ', binarySearchTree);

	binarySearchTree.listTree();

	binarySearchTree.treeHeight();
}

test1();
test2();
test2a();
test2b();
test2c();

test3();
