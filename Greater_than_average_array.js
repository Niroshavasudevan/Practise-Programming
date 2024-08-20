let array = [1, 5, 8, 10, 12, 3]; 
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
let average = sum / array.length;
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > average) {
        count++;
    }
}
console.log("Number of elements greater than average: " + count);
