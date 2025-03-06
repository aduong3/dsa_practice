class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.value) return undefined;
      if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  bfs() {
    let queue = [];
    let visited = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      //   visited.push(node)
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }
}

//BFS cases:
const tree = new BinarySearchTree();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
console.log(tree.bfs());
