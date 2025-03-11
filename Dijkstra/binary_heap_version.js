class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest; //node we are visiting
    let path = []; //to return at end
    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit in priority queue.
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === end) {
        // BUILD PATH
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        // RETURN
        return path.concat(start).reverse();
      }
      if (smallest && distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode.node);
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;

            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
  }
}

class Node {
  constructor(value, priority) {
    this.val = value;
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
    if (this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;

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

const graph = new WeightedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A", "B", 4);
// graph.addEdge("A", "C", 2);
// graph.addEdge("B", "E", 3);
// graph.addEdge("C", "D", 2);
// graph.addEdge("C", "F", 4);
// graph.addEdge("D", "E", 3);
// graph.addEdge("D", "F", 1);
// graph.addEdge("E", "F", 1);

// console.log(graph.dijkstra("A", "E"));

graph.addVertex("A");
graph.addVertex("Z");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("H");
graph.addVertex("Q");
graph.addVertex("G");

graph.addEdge("A", "Z", 7);
graph.addEdge("A", "C", 8);

graph.addEdge("Z", "Q", 2);

graph.addEdge("C", "G", 4);

graph.addEdge("D", "Q", 8);

graph.addEdge("E", "H", 1);

graph.addEdge("H", "Q", 3);

graph.addEdge("Q", "C", 6);

graph.addEdge("G", "Q", 9);

console.log(graph.dijkstra("A", "E"));
console.log(graph.adjacencyList);
// ["A", "Z", "Q", "H", "E"]
