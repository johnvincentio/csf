//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
node.next references the next node object
node.value is the value contained by the node
*/

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	createLoop() {
		this.insert(0, 'A');
		this.insert(1, 'B');
		this.insert(2, 'C');
		this.insert(3, 'D');
		this.insert(4, 'E');
		const node1 = this.find(1);
		const node3 = this.find(3);
		node3.next = node1;
	}

	checkLoop() {
		for (let i = 0; i < this.length; i++) {
			const node = this.find(i);
			node.checked = false;
		}
		for (let i = 0; i < this.length; i++) {
			const node = this.find(i);
			if (node.checked) {
				console.log(`Found a loop at index ${i} value ${node.value}`);
			}
			node.checked = true;
		}
	}

	reverse() {
		const index = this.length - 1;
		let pos = 0;
		while (pos < index) {
			const node = this.find(index);
			const { value } = node;
			this.remove(index);
			this.insert(pos, value);
			pos++;
		}
	}

	thirdFromEndElement() {
		const total = this.calculateNodes();
		return total < 3 ? null : this.get(total - 3);
	}

	middleElement() {
		const total = this.calculateNodes();
		return total === 0 ? null : this.get((total - 1) / 2);
	}

	calculateNodes() {
		let counter = 0;
		let node = this.head;
		while (node != null) {
			node = node.next;
			counter++;
		}
		return counter;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) {
			throw new Error('Index error');
		}
		const newNode = { value };
		if (index === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			const node = this.find(index - 1);
			newNode.next = node.next;
			node.next = newNode;
		}
		this.length++;
	}

	find(index) {
		let node = this.head;
		for (let i = 0; i < index; i++) {
			node = node.next;
		}
		return node;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		return this.find(index).value;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		if (index === 0) {
			this.head = this.head.next;
		} else {
			const node = this.find(index - 1);
			node.next = node.next.next;
		}
		this.length--;
	}

	load(arr) {
		arr.forEach((element, idx) => {
			this.insert(idx, element);
		});
	}

	list() {
		for (let i = 0; i < this.length; i++) {
			console.log(`value: ${this.get(i)}`);
		}
	}
}

module.exports = LinkedList;
