//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties, no-underscore-dangle */

class BinarySearchTree {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	nodeHeight(obj, counter) {
		// console.log('level: ', counter + 1, ' key, value ', obj.key, ', ', obj.value);
		let maxLeft = 0;
		let maxRight = 0;
		if (this.key == null) {
			return counter;
		}
		if (obj.left === null && obj.right === null) {
			return counter + 1;
		}
		if (obj.left !== null) {
			maxLeft = this.nodeHeight(obj.left, counter + 1);
		}
		if (obj.right !== null) {
			maxRight = this.nodeHeight(obj.right, counter + 1);
		}
		return maxLeft > maxRight ? maxLeft : maxRight;
	}

	treeHeight() {
		const maxHeight = this.nodeHeight(this, 0);
		console.log('maxHeight ', maxHeight);
	}

	listNode(obj, counter) {
		// console.log('listNode; obj ', obj);
		console.log('level: ', counter + 1, ' key, value ', obj.key, ', ', obj.value);
		if (obj.left !== null) {
			this.listNode(obj.left, counter + 1);
		}
		if (obj.right !== null) {
			this.listNode(obj.right, counter + 1);
		}
	}

	listTree() {
		const counter = 0;
		this.listNode(this, counter);
	}

	insertKey(key) {
		this.insert(key, key);
	}

	insert(key, value) {
		if (this.key == null) {
			this.key = key;
			this.value = value;
		} else if (key < this.key) {
			if (this.left == null) {
				this.left = new BinarySearchTree(key, value, this);
			} else {
				this.left.insert(key, value);
			}
		} else if (this.right == null) {
			this.right = new BinarySearchTree(key, value, this);
		} else {
			this.right.insert(key, value);
		}
	}

	get(key) {
		if (this.key === key) {
			return this.value;
		} else if (key < this.key && this.left) {
			return this.left.get(key);
		} else if (key > this.key && this.right) {
			return this.right.get(key);
		}
		throw new Error('Key Error');
	}

	remove(key) {
		if (this.key === key) {
			if (this.left && this.right) {
				const successor = this.right._findMin();
				this.key = successor.key;
				this.value = successor.value;
				successor.remove(successor.key);
			} else if (this.left) {
				this._replaceWith(this.left);
			} else if (this.right) {
				this._replaceWith(this.right);
			} else {
				this._replaceWith(null);
			}
		} else if (key < this.key && this.left) {
			this.left.remove(key);
		} else if (key > this.key && this.right) {
			this.right.remove(key);
		} else {
			throw new Error('Key Error');
		}
	}

	_replaceWith(node) {
		if (this.parent) {
			if (this === this.parent.left) {
				this.parent.left = node;
			} else if (this === this.parent.right) {
				this.parent.right = node;
			}
			if (node) {
				node.parent = this.parent;
			}
		} else if (node) {
			this.key = node.key;
			this.value = node.value;
			this.left = node.left;
			this.right = node.right;
		} else {
			this.key = null;
			this.value = null;
			this.left = null;
			this.right = null;
		}
	}

	_findMin() {
		if (!this.left) {
			return this;
		}
		return this.left._findMin();
	}
}

module.exports = BinarySearchTree;
