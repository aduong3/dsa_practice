class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }
  shift() {
    if (!this.head) return undefined;
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let mid = Math.floor(this.length / 2);
    let currentIndex;
    let currentNode;
    if (index <= mid) {
      currentIndex = 0;
      currentNode = this.head;
      while (currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
    } else {
      currentIndex = this.length - 1;
      currentNode = this.tail;
      while (currentIndex !== index) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
    }
    return currentNode;
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let foundNode = this.get(index);
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;

    newNode.next = afterNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removed = this.get(index);
    let prevNode = removed.prev;
    let afterNode = removed.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
