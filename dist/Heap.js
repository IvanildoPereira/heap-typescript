"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Heap {
    constructor(capacity, scoreFunction) {
        this._data = [];
        this._size = 0;
        this._capacity = capacity;
        this.scoreFunction = scoreFunction;
    }
    get data() {
        return this._data;
    }
    get size() {
        return this._size;
    }
    get capacity() {
        return this._capacity;
    }
    set capacity(value) {
        this._capacity = value;
    }
    clearHeap() {
        this._data = [];
        this._size = 0;
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this._size;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this._size;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this._data[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this._data[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this._data[this.getParentIndex(index)];
    }
    isFull() {
        return this._size == this._capacity;
    }
    isEmpty() {
        return this._size == 0;
    }
    swap(index1, index2) {
        let temp = this._data[index1];
        this._data[index1] = this._data[index2];
        this._data[index2] = temp;
    }
    push(data) {
        if (this.isFull())
            throw new Error("The capacity is full!");
        this._data[this._size] = data;
        this._size += 1;
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this._size - 1;
        while (this.hasParent(index) && this.scoreFunction(this.parent(index)) > this.scoreFunction(this._data[index])) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    pop() {
        if (this.isEmpty())
            throw new Error("The Heap is Empty!");
        let data = this._data[0];
        this._data[0] = this._data[this._size - 1];
        this._size -= 1;
        this.heapifyDown();
        return data;
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.scoreFunction(this.rightChild(index)) < this.scoreFunction(this.leftChild(index)))
                smallerChildIndex = this.getRightChildIndex(index);
            if (this.scoreFunction(this._data[index]) < this.scoreFunction(this._data[smallerChildIndex]))
                break;
            else
                this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}
exports.default = Heap;
