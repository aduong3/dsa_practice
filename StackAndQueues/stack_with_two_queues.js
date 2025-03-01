/*
The queue and node implementations were given to me already from the course challenge. My challenge was to then implement the stack functionality.
From my understanding, there are 2 ways to go about this.
Either make the stack's pop functionality the same as it would be originally by manipulating the push method.
Or make the stack's push functionality the same as it would be originally by manipulating the pop method.

The first method that popped in my head was to manipulate the push method with 2 queues.
*/

class Stack {
  constructor() {
    this.queue = new Queue();
  }
  push(val) {
    let firstQueue = this.queue,
      secondQueue = new Queue();
    secondQueue.enqueue(val);
    while (firstQueue.size !== 0) {
      secondQueue.enqueue(firstQueue.dequeue());
    }
    this.queue = secondQueue;
    this.queue.size++;
    return this;
  }
  pop() {
    return this.queue.dequeue();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
