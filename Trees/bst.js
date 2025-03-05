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
  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (val !== currentNode.value) {
      if (val < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else return false;
      } else if (val > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
    return currentNode;
  }

  remove(val) {
    if (!this.root) return null;
    let currentNode = this.root;

    let prevNode;

    while (val !== currentNode.value) {
      prevNode = currentNode;
      if (val < currentNode.value) {
        if (currentNode.left) currentNode = currentNode.left;
        else return null;
      } else {
        if (currentNode.right) currentNode = currentNode.right;
        else return null;
      }
    }
    if (!currentNode) return null;
    if (!currentNode.left && !currentNode.right) {
      //none
      if (currentNode === prevNode.left) {
        prevNode.left = null;
      } else {
        prevNode.right = null;
      }
      if (currentNode === this.root) {
        this.root = null;
      }
    } else if (!currentNode.left || !currentNode.right) {
      //1 child
      let childNode = currentNode.left ? currentNode.left : currentNode.right;

      if (prevNode.left === currentNode) {
        prevNode.left = childNode;
      } else {
        prevNode.right = childNode;
      }
      if (currentNode === this.root) {
        this.root = childNode;
      }
    } else {
      //2 child
      let successorParent = currentNode;
      let successor = currentNode.right;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      currentNode.value = successor.value;

      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }

    return currentNode;
  }

  findSecondLargest() {
    if (!this.root) return undefined;
    if (!this.root.left && !this.root.right) return undefined;
    let currentNode = this.root;
    let prevNode = currentNode;
    while (currentNode.right) {
      prevNode = currentNode;
      currentNode = currentNode.right;
    }
    return prevNode.value;
  }

  isBalanced() {
    if (!this.root) return true;

    function height(node) {
      if (!node) return 0;
      let leftHeight = height(node.left);
      let rightHeight = height(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }
      return Math.max(leftHeight, rightHeight) + 1;
    }
    return height(this.root) !== -1;
  }
}

/* // TEST FOR remove

const tree = new BinarySearchTree();
tree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
tree.remove(50);
console.log(tree.root.right.value); // 20
console.log(tree.root.right.right); // null

tree.remove(5);
console.log(tree.root.left.left.value); // 1
console.log(tree.root.left.left.right); // null

*/

/* // TEST FOR findSecondLargest

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15).insert(20).insert(10).insert(12);

console.log(binarySearchTree.findSecondLargest());

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(10);
console.log(binarySearchTree2.findSecondLargest()); // returns undefined

*/

/* // TEST FOR isBalanced

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);

console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false

*/
