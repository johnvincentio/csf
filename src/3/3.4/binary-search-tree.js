//

/* eslint-disable no-plusplus, no-console, no-restricted-properties, no-underscore-dangle, no-param-reassign */

class BinarySearchTree {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	nodeCounter(obj, arr) {
		// console.log('level: key, value ', obj.key, ', ', obj.value);
		let countLeft = 0;
		let countRight = 0;
		obj.counter = 0; // initialize children counter

		if (obj.key == null) {
			return 0;
		}
		if (obj.left === null && obj.right === null) {
			arr.push({ key: obj.key, counter: 1 });
			obj.counter = 1;
			return 1;
		}
		if (obj.left !== null) {
			countLeft = this.nodeCounter(obj.left, arr);
		}
		if (obj.right !== null) {
			countRight = this.nodeCounter(obj.right, arr);
		}
		// console.log('countLeft ', countLeft, ' countRight ', countRight);
		const total = 1 + countLeft + countRight;
		obj.counter += total;
		arr.push({ key: obj.key, counter: obj.counter });
		return total;
	}

	insertBrokenTree(key, value) {
		if (this.key == null) {
			this.key = key;
			this.value = value;
		} else if (key > this.key) {
			// only change, s.b. <
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

	checkNode(obj) {
		let leftValid = true;
		let rightValid = true;
		if (obj.key == null) {
			return true;
		}
		if (obj.left === null && obj.right === null) {
			return true;
		}

		if (obj.left !== null && obj.left.key > obj.key) {
			console.error('ERROR; key ', obj.key, ' is > left ', obj.left.key);
			return false;
		}

		if (obj.right !== null && obj.right.key < obj.key) {
			console.error('Error; key ', obj.key, ' is < right ', obj.right.key);
			return false;
		}

		if (obj.left !== null) {
			leftValid = this.checkNode(obj.left);
		}
		if (obj.right !== null) {
			rightValid = this.checkNode(obj.right);
		}
		return leftValid && rightValid;
	}

	checkBinarySearchTree() {
		const valid = this.checkNode(this);
		console.log('valid ', valid);
	}

	nodeHeight(obj, counter) {
		// console.log('level: ', counter + 1, ' key, value ', obj.key, ', ', obj.value);
		let maxLeft = 0;
		let maxRight = 0;
		if (obj.key == null) {
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
		console.log('level: ', counter + 1, ' key, value ', obj.key, ', ', obj.value, ' counter ', obj.counter);
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
