"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isHeap_1 = require("./isHeap");
describe("Checking is Heap Function", () => {
    test("Array should be a Min-Heap", () => {
        let array = [1, 2, 3, 4, 5, 6];
        let scoreFunction = (data) => { return data; };
        expect((0, isHeap_1.isMinHeap)(array, array.length, scoreFunction)).toBe(true);
    });
    test("Array shouldn't be a Min-Heap", () => {
        let array = [90, 15, 10, 7, 12, 2, 7, 3];
        let scoreFunction = (data) => { return data; };
        expect((0, isHeap_1.isMinHeap)(array, array.length, scoreFunction)).toBe(false);
    });
    test("Array should be a Max-Heap", () => {
        let array = [90, 15, 10, 7, 12, 2, 7, 3];
        let scoreFunction = (data) => { return data; };
        expect((0, isHeap_1.isMaxHeap)(array, array.length, scoreFunction)).toBe(true);
    });
    test("Array shouldn't be a Max-Heap", () => {
        let array = [1, 2, 3, 4, 5, 6];
        let scoreFunction = (data) => { return data; };
        expect((0, isHeap_1.isMaxHeap)(array, array.length, scoreFunction)).toBe(false);
    });
});
