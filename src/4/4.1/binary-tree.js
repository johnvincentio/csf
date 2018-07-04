//

/* eslint-disable no-plusplus, no-console, no-restricted-properties, no-underscore-dangle, no-param-reassign */

class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	dfs(values = []) {
		if (this.left) {
			values = this.left.dfs(values);
		}
		values.push(this.value);
		if (this.right) {
			values = this.right.dfs(values);
		}
		return values;
	}

	bfs(values = []) {
		const queue = [this];

		while (queue.length) {
			const node = queue.shift();
			values.push(node.value);
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
		return values;
	}
}

module.exports = BinaryTree;
