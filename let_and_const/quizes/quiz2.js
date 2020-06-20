/* Createing a function extractNegativeNumbers() that accepts an array
 of numbers as an argument. And will set global variable as an array of negative numbers
if the input array have.
*/


// eg. Input: [1, -1, 3, -5, 0]
// expected Output: [-1 , -3]

const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    		// append any negative numbers found in the numbers array 
    		// into the negativeNumbers array constant variable above
}



// solution below
/*  
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    numbers.forEach(function(number){
        if(number < 0)
        negativeNumbers.push(number)
    })
}

// calling the function with the input value
extractNegativeNumbers([1, -1, 3, -5, 0]);

// printing the nragtiveNumbers as output
negativeNumbers;

*/
