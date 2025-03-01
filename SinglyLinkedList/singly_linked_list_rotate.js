/*
    Node class and SinglyLinkedList's push method were provided already from Colt Steele's DSA course.
    I just needed to implement the rotate method.

1) create a counter index
2) while the counter index is not the provided index
3) set the current node to the head
4) set the current head to the next node
5) set current node's next to null
6) push the current nodes value
7) increase the counter index
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // 1->2->3->4->5
  // 2->3->4->5->1
  // 3->4->5->1->2
  rotate(num) {
    let currentNum = 0;
    if (num === 0 || num > this.length) return;
    if (num < 0) num = this.length + num;
    while (currentNum < num) {
      let currentNode = this.head;
      this.head = this.head.next;
      currentNode.next = null;
      this.push(currentNode.val);
      currentNum++;
    }
  }
}
