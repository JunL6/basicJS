//const  numbers = [ 1, 2, 3, 4, 5, 6 ];
//let result = numbers.reduce(((sum, number) => sum+number), 0);
//console.log(result);


//#### to capture a list of arguments
function addNumbers(...numbers) {
    return numbers.reduce(((sum, number) => sum + number), 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));