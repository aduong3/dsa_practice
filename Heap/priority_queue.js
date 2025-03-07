class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, prio) {
    let newNode = new Node(val, prio);
    this.values.push(newNode);

    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;

      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = leftChildIndex + 1;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (element.priority >= leftChild.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (rightChild.priority <= leftChild.priority) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    return min;
  }
}

const ER = new PriorityQueue();

// ER.enqueue("common cold", 5);
// ER.enqueue("gunshot wound", 1);
// ER.enqueue("high fever", 4);
// ER.enqueue("broken arm", 2);
// ER.enqueue("glass in foot", 3);
// ER.enqueue("fatal wound", 1);
// ER.enqueue("drunk", 5);

// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
