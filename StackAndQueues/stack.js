class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.top) return null;
    let removed = this.top;
    if (this.size === 1) {
      this.top = null;
    } else {
      this.top = this.top.next;
      //   removed.next = null;
    }

    this.size--;
    return removed.val;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(9);
stack.push(8);
console.log(stack.pop());
