export default class Heap<T>{
    private _data: Array<T>;
    private _size: number;
    private _capacity: number;
    scoreFunction: (item: T) => number


    constructor(capacity: number, scoreFunction: (item: T) => number){
        this._data = [];
        this._size = 0;
        this._capacity = capacity;
        this.scoreFunction = scoreFunction;
    }

    get data(): T[]{
        return this._data;
    }

    get size(): number{
        return this._size;
    }

    get capacity(): number{
        return this._capacity;
    }

    set capacity(value: number){
        this._capacity = value;
    }



    clearHeap(){
        this._data = [];
        this._size = 0;
    }

    getLeftChildIndex(index: number): number{
        return 2 * index + 1;
    }

    getRightChildIndex(index: number): number{
        return 2 * index + 2;
    }
    
    getParentIndex(index: number): number{
        return Math.floor((index - 1) / 2)
    }

    hasLeftChild(index: number): boolean{
        return this.getLeftChildIndex(index) < this._size;
    }

    hasRightChild(index: number): boolean{
        return this.getRightChildIndex(index) < this._size;
    }

    hasParent(index: number): boolean{
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index: number): T{
        return this._data[this.getLeftChildIndex(index)];
    }

    rightChild(index: number): T{
        return this._data[this.getRightChildIndex(index)];
    }

    parent(index: number): T{
        return this._data[this.getParentIndex(index)];
    }

    isFull(): boolean{
        return this._size == this._capacity;
    }

    isEmpty(): boolean{
        return this._size == 0;
    }
    
    swap(index1: number, index2: number): void{
        let temp: T = this._data[index1];
        this._data[index1] = this._data[index2];
        this._data[index2] = temp;
    }

    push(data: T): void{
        if(this.isFull()) throw new Error("The capacity is full!"); 
        this._data[this._size] = data;
        this._size += 1;
        this.heapifyUp();
    }
    
    heapifyUp(): void{
         let index: number = this._size - 1;
         while(this.hasParent(index) && this.scoreFunction(this.parent(index)) > this.scoreFunction(this._data[index])){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
         }

    }
    
    pop(): T{ 
        if(this.isEmpty()) throw new Error("The Heap is Empty!"); 
        let data: T = this._data[0];
        this._data[0] = this._data[this._size - 1];
        this._size -= 1;
        this.heapifyDown();
        return data;
    }   

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.scoreFunction(this.rightChild(index)) < this.scoreFunction(this.leftChild(index)))
                smallerChildIndex = this.getRightChildIndex(index);
            if(this.scoreFunction(this._data[index]) < this.scoreFunction(this._data[smallerChildIndex]))
                break;
            else
                this.swap(index,smallerChildIndex);
            index = smallerChildIndex;
        }
    }     
}











