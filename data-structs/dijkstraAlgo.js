/*
Traverses a graph and uses a binary heap priority queue.
We'll need a weighted graph
Find shortest length from A to E.
Our graph: Vertexes = letters, edges = numbers
   A__4___B
2 /       \  3
 C__2_D_3__E
  \   1\   / 1
 4 ------F

The Approach:
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbors.
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

START:
___________________________________
| VERTEX | SHORTEST DISTANCE FROM A |
|--------|--------------------------|
|   A    | 0                        |
|--------|--------------------------|
|   B    | Infinity                 |
|--------|--------------------------|
|   C    | Infinity                 |
|--------|--------------------------|
|   D    | Infinity                 |
|--------|--------------------------|
|   E    | Infinity                 |
|--------|--------------------------|
|   F    | Infinity                 |
'--------'--------------------------'
END:
___________________________________
| VERTEX | SHORTEST DISTANCE FROM A |
|--------|--------------------------|
|   A    |(A -> A = 0) 0            |
|--------|--------------------------|
|   B    |(A -> B = 4) 4            |
|--------|--------------------------|
|   C    |(A -> C = 2) 2            |
|--------|--------------------------|
|   D    |(A -> C = 2, C -> D = 2) 4|
|--------|--------------------------|
|   E    |(A->C, D->F, F->E) 6      |
|--------|--------------------------|
|   F    |(A -> C = 2, C -> F = 4) 6|
'--------'--------------------------'
Visited:
[A, C, B, D]

Previous:
{
  A: null,
  B: A,
  C: A,
  D: C,
  E: F,
  F: D,
}
Each time we calculate the new shortest distance. 
*/

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqeue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

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
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return @ end
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqeue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqeue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there's something to visit...
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we're done
        // build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calc new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            // updates new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updates previous / How we got to the neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqeue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

graph.Dijkstra("A", "E");
console.log(graph.Dijkstra("A", "E"));