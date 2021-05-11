// # Callbacks

// #### Number Square
// * Write a function which will return square of given number
// * Write a function which will return square of every number in array


const squareNumber = (number) => number * number;

const array = [1, 2, 3, 4, 5, 6, 12]

const square = (arrayOfNumbers, func) => {
    const squaredArray = arrayOfNumbers.map(currentNumber => func(currentNumber));
    return squaredArray;
};

const result = square(array, squareNumber)  // return [1,4,9,16,25]
console.log(result);