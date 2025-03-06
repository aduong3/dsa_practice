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
  dfsPreOrder() {
    let visited = [];
    function helper(node) {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return visited;
  }
  dfsPostOrder() {
    let visited = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }

    helper(this.root);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    function helper(node) {
      if (node.left) helper(node.left);
      visited.push(node.value);
      if (node.right) helper(node.right);
    }

    helper(this.root);
    return visited;
  }
}
/*
              10
      
        6           15
 
    3       8               20


*/

const tree = new BinarySearchTree();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
