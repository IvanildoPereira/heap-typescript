import Heap from "./Heap";

describe("Checking Generic Heap", () => {
    let scoreFunction = (data: number) => {return data}
    let heap = new Heap<number>(10, scoreFunction)

    test("Heap is ordering correctly the values in heap after pushing", () =>{
        let array = [3, 2, 1, 7, 8, 4, 10, 16, 12, 20];
        array.forEach((value: number)=>{
            heap.push(value);
        })
        expect(heap.data).toEqual([1, 3, 2, 7, 8, 4, 10, 16, 12, 20])       
    })

    test("The Push Function will throw an error because the capacity is full", () =>{
        expect(() => {
            heap.push(20)
        }).toThrow("The capacity is full!")
    })

    test("Pop all the minimum value of a heap, will give a orded array of values", () => {
        let orderdArray: number[] = [];
        let length = heap.size;
        for(let i = 0; i < length; i++){
            orderdArray.push(heap.pop());
        }

        expect(orderdArray).toEqual([1,2,3,4,7,8,10,12,16,20]);
    })

    test("The Poll Function will throw an error because the heap is empty", () =>{
        expect(() => {
            heap.pop()
        }).toThrow("The Heap is Empty!")
    })



})