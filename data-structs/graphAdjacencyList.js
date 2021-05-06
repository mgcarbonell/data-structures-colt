/*
Why an adjacency list? Most real life data is going to be huge
*/

// undirected graph

class Graph {
	constructor() {
		this.adjacencyList = {}
	}
	// adding a vertex
	// write a method called addVertex which accepts a name of a vertex
	addVertex(vertex) {
		// add a key to the adjacency list with name and sets its value to ''
		// this makes sure data isn't overriden if it's already there.
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	// adding an edge
	// write a method that accepts two vertices, vertex1 && vertex2
	addEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	// remove an edge
	removeEdge(vertex1, vertex2) {
		// makes vertex1 be everything that it was minus vertex2
		// filter to make v not equal to v2; keep everything not equal to vertex2
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			vertex => vertex !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			vertex => vertex !== vertex1
		)
	}
	// remove - remove all edges && the vertex
	removeVertex(vertex) {
		// loop for as long as there are any other vertices in the adjacency list 
		// for it (call removeEdge for each edge)
		while (this.adjacencyList[vertex].length) {
			let adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex]
	}
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Dallas');
g.addVertex('Hong Kong');
g.addVertex('Los Angeles');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Aspen');
g.addEdge('Los Angeles', 'Hong Kong');
console.log(g)
g.removeVertex('Hong Kong')
console.log(g)
