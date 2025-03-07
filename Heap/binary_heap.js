class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) break;

      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.pop();
    }
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = leftChildIndex + 1;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (rightChild > leftChild) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
const heap = new MaxHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

heap.insert(55);

console.log(heap);

// console.log(heap.extractMax());
// console.log(heap.extractMax());

// console.log(heap);
