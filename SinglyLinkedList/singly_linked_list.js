class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = value;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      return !!this.push(val);
    }
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }
  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("HI");
list.push("BYE");

// console.log(list);
console.log(list.reverse());
