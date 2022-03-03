export const isMinHeap = <T>( arr: T[], n: number, scoreFunction: (item: T) => number) =>{
    // Start from root and go till
    // the last internal node
    for (let i = 0; i <= Math.floor((n-2)/2); i++)
    {
        // If left child is lesser,
        // return false
        if (scoreFunction(arr[2*i +1]) < scoreFunction(arr[i]))
                return false;
 
        // If right child is lesser,
        // return false
        if (2*i+2 < n && scoreFunction(arr[2*i+2]) < scoreFunction(arr[i]))
            return false;
    }

    
    return true;
}

export const isMaxHeap = <T>( arr: T[], n: number, scoreFunction: (item: T) => number) =>{
    // Start from root and go till
    // the last internal node
    for (let i = 0; i <= Math.floor((n-2)/2); i++)
    {
        // If left child is greater,
        // return false
        if (scoreFunction(arr[2*i +1]) > scoreFunction(arr[i]))
                return false;
 
        // If right child is greater,
        // return false
        if (2*i+2 < n && scoreFunction(arr[2*i+2]) > scoreFunction(arr[i]))
            return false;
    }

    
    return true;
}


