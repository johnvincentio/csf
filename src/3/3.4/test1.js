//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Write an algorithm to find the height of a binary search tree
*/

const BinarySearchTree = require('./binary-search-tree.js');

const binarySearchTree = new BinarySearchTree();

// binarySearchTree.list();

binarySearchTree.insertKey(10);
binarySearchTree.insertKey(1);
binarySearchTree.insertKey(11);
binarySearchTree.insertKey(14);
binarySearchTree.insertKey(12);
binarySearchTree.insertKey(3);
binarySearchTree.insertKey(2);

console.log('binarySearchTree ', binarySearchTree);

binarySearchTree.listTree();
