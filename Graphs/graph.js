class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;

    if (!this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);
    if (!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;
    if (this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      );
    if (this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      );
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex] || !this.adjacencyList[vertex].length)
      return null;
    const currentList = this.adjacencyList[vertex];
    for (let i = 0; i < currentList.length; i++) {
      this.removeEdge(currentList[i], vertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Aspen", "Dallas");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Dallas");

graph.removeVertex("Hong Kong");
console.log(graph);
