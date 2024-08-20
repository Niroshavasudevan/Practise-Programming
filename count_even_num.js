let array = [1, 2, 3, 4, 5, 6]; 
let evenNum = 0; 
for (let index = 0; index < array.length; index++) { 
	if (array[index] % 2 == 0) { 
		evenNum++; 
	} 
} 
console.log("Total even number: " + evenNum); 
