function countPalindromes(arr) {
    let palindromeCount = 0;

    arr.forEach(str => {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        if (str === reversedStr) {
            palindromeCount++;
        }
    });
    return palindromeCount;
}
const strings = ["madam", "hello", "racecar", "level", "world"];
console.log(countPalindromes(strings));  
