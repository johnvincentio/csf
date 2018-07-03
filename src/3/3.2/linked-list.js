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

	reverse() {
		console.log(`>>> reverse`);
		this.list();
		let index = this.length - 1;
		let pos = 0;
		while (index >= 0) {
			const node = this.find(index);
			const { value } = node;
			console.log(`index ${index} value ${value}`);

			this.remove(index);
			console.log(`after remove`);
			this.list();

			this.insert(pos, value);
			console.log(`after insert`);
			this.list();

			pos++;
			index--;
		}
		console.log(`<<< reverse`);
		this.list();
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
