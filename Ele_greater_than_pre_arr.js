function findFirstGreaterElement(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return arr[i];  
        }
    }
    return null; 
}
const numbers = [3, 2, 5, 1, 4];
console.log(findFirstGreaterElement(numbers)); 
