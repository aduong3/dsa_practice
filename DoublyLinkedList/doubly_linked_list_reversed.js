/*
The Node and DoublyLinkedList's push method were already implemented from the course challenge.
I just had to implement the reverse method.

1) save the next node in a variable
2) manipulate the prev and next of the currentNode
3) set the currentNode to the next node.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  reverse() {
    if (this.length <= 1) return this;

    let currentNode = this.head;
    while (currentNode !== null) {
      let nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}
