"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Heap_1 = __importDefault(require("./Heap"));
const isHeap_1 = require("./isHeap");
class Node {
    constructor(id, fCost) {
        this.id = id;
        this.fCost = fCost;
    }
}
const heap = new Heap_1.default(10, (data) => { return data.fCost; });
heap.push(new Node("1", 1));
heap.push(new Node("2", 2));
heap.push(new Node("3", 13));
heap.push(new Node("4", 4));
heap.push(new Node("5", 10));
const heap2 = new Heap_1.default(5, (data) => { return data; });
heap2.push(1);
heap2.push(2);
heap2.push(3);
heap2.push(10);
heap2.push(5);
console.log("HeapNode:", (0, isHeap_1.isMinHeap)(heap.data, heap.size, (data) => { return data.fCost; }));
heap2.push(20);
console.log("Heap:", (0, isHeap_1.isMinHeap)(heap2.data, heap2.size, (data) => { return data; }));
console.log(heap.data, heap.size);
let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
heap.clearHeap();
console.log(heap.data, heap.size);
