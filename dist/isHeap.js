"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMaxHeap = exports.isMinHeap = void 0;
const isMinHeap = (arr, n, scoreFunction) => {
    // Start from root and go till
    // the last internal node
    for (let i = 0; i <= Math.floor((n - 2) / 2); i++) {
        // If left child is lesser,
        // return false
        if (scoreFunction(arr[2 * i + 1]) < scoreFunction(arr[i]))
            return false;
        // If right child is lesser,
        // return false
        if (2 * i + 2 < n && scoreFunction(arr[2 * i + 2]) < scoreFunction(arr[i]))
            return false;
    }
    return true;
};
exports.isMinHeap = isMinHeap;
const isMaxHeap = (arr, n, scoreFunction) => {
    // Start from root and go till
    // the last internal node
    for (let i = 0; i <= Math.floor((n - 2) / 2); i++) {
        // If left child is greater,
        // return false
        if (scoreFunction(arr[2 * i + 1]) > scoreFunction(arr[i]))
            return false;
        // If right child is greater,
        // return false
        if (2 * i + 2 < n && scoreFunction(arr[2 * i + 2]) > scoreFunction(arr[i]))
            return false;
    }
    return true;
};
exports.isMaxHeap = isMaxHeap;
