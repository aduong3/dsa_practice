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
  dfs_recursive(vertex) {
    let results = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;
    function helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      for (let i = 0; i < adjacencyList[vertex].length; i++) {
        if (!visited[adjacencyList[vertex][i]]) {
          helper(adjacencyList[vertex][i]);
        }
      }
    }

    helper(vertex);

    return results;
  }
  dfs_iterative(vertex) {
    let S = [];
    let result = [];
    let visited = {};
    S.push(vertex);

    while (S.length) {
      vertex = S.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
          // console.log(this.adjacencyList[vertex][i]);
          S.push(this.adjacencyList[vertex][i]);
        }
      }
    }
    return result;
  }
  bfs(vertex) {
    let queue = [];
    let visited = {};
    let result = [];
    queue.push(vertex);
    while (queue.length) {
      let removed = queue.shift();
      result.push(removed);
      visited[removed] = true;
      for (let i = 0; i < this.adjacencyList[removed].length; i++) {
        if (!visited[this.adjacencyList[removed][i]]) {
          visited[this.adjacencyList[removed][i]] = true;
          queue.push(this.adjacencyList[removed][i]);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
// graph.addVertex("Tokyo");
// graph.addVertex("Dallas");
// graph.addVertex("Aspen");
// graph.addVertex("Hong Kong");
// graph.addVertex("Los Angeles");

// graph.addEdge("Tokyo", "Dallas");
// graph.addEdge("Hong Kong", "Tokyo");
// graph.addEdge("Aspen", "Dallas");
// graph.addEdge("Hong Kong", "Dallas");
// graph.addEdge("Los Angeles", "Hong Kong");
// graph.addEdge("Los Angeles", "Dallas");

// graph.removeVertex("Hong Kong");
// console.log(graph);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.dfs_recursive("A"));
console.log(graph.dfs_iterative("A"));
console.log(graph.bfs("A"));
