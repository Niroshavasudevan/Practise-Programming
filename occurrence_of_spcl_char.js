function countOccurrences(array, element) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            count++;
        }
    }
    return count;
}
const array = [1, 2, 3, 4, 1, 2, 1, 5];
const element = 1;
const occurrences = countOccurrences(array, element);
console.log(occurrences); 
