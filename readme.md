# Min-Heap - Typescript
Heap data structure is a complete binary tree that satisfies the heap property, where any given node is:

* Always greater than its child node/s and the key of the root node is the largest among all other nodes. This property is also called max heap property.

* Always smaller than the child node/s and the key of the root node is the smallest among all other nodes. This property is also called min heap property.



## How to use

### Import the class
~~~typescript
import Heap from "Heap.js"
~~~


### Instatiate the class
~~~typescript
let scoreFunction = (data: number) => {return data} // Function to return a value When it's going to score the values of heap
let heap = new Heap<number>(10, scoreFunction) // You need to define a capacity of the heap, and a score function
~~~

### Push a Value to heap
~~~typescript
let value = 2;
heap.push(value);
~~~

### Delete the min-value of the heap
~~~typescript
let minValue = heap.pop(); // it will return the minimum value of the heap
~~~

### I builded this heap to help to improve the perfomace of the A* pathfinding algorithm, and I builded this heap to be generic to accept Generic values, so I coud pass to the heap a Node class with is used to store the value of earch node of the the grid map

~~~typescript
// An example of a node class needed in the A* pathfinding
class Node{
    x: number;
    y: number;
    fScore: number;
    gScore: number;

    contructor(x,y, fScore, gScore){
        this.x = x;
        this.y = y;
        this.fScore = fScore;
        this.gScore = gScore;
    }
}

let scoreFunction = (data: Node) => {return data.fScore} // Function to return a value When it's going to score the values of heap
let heap = new Heap<Node>(10, scoreFunction) // You need to define a capacity of the heap, and a score function

let node1 = new Node(1,1, 2, 2)
let node2 = new Node(1,1, 2, 2)

heap.push(node1)
heap.push(node2)

let minValue = heap.pop() //  it will return the minimum value of the heap witch it's really important to the algorithm
~~~

<p style = "color: red"><b>In future I want to extend this class to be usefull to Max values too</b></p>

