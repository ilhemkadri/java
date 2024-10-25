function ReversedString(str){
    let result =str.split('').reverse().join('');
    alert("Reversed String:" + result);
}
ReversedString(prompt("Enter a string to reverse:"));

function countCharacters(str){
    let result = str.length;
    alert("Characters Numbers:" + result);
}
countCharacters(prompt("Enter a string to count characters:"));


function capitalizeWords(sentence) {
    let result = sentence.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    alert("Capitalized Sentence: " + result);
}
capitalizeWords(prompt("Enter a sentence to capitalize words:"));


function findMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let maxInput = prompt("Enter numbers separated by commas to find the maximum:");

let maxNumbers = maxInput.split(",").map(Number);

let maxValue = findMax(maxNumbers);

alert("Maximum value: " + maxValue);

function findMin(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let minInput = prompt("Enter numbers separated by commas to find the minimum:");
let minNumbers = minInput.split(",").map(Number);
let minValue = findMin(minNumbers);
alert("Minimum value: " + minValue);

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
    return sum;
}
let userInput = prompt("Enter numbers separated by commas:");
let userNumbers = userInput.split(",").map(Number);
alert("Sum of array elements: " + sumArray(userNumbers));

function filterArray(array, condition) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
        filteredArray.push(array[i]);
    }
    }
    return filteredArray;
}

let input = prompt("Enter numbers separated by commas:");
let numbers = input.split(",").map(Number);
let isEven = (number) => number % 2 === 0;
let filteredNumbers = filterArray(numbers, isEven);
alert("Filtered even numbers: " + filteredNumbers.join(", "));

function factorial(n) {
    if (n === 0 || n === 1) return 1; 
    let result = 1; 
    for (let i = 2; i <= n; i++) { 
      result *= i; 
    }
    return result;
}

let num = parseInt(prompt("Enter a number to calculate its factorial:"));
alert("Factorial of " + num + " is: " + factorial(num));


function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) { 
    if (number % i === 0) return false; 
    }
    return true;
}

let primeNum = parseInt(prompt("Enter a number to check if it is prime:"));
alert(primeNum + (isPrime(primeNum) ? " is a prime number." : " is not a prime number."));

function fibonacci(terms) {
    let sequence = [0, 1]; 
    for (let i = 2; i < terms; i++) { 
    sequence.push(sequence[i - 1] + sequence[i - 2]); 
    }
    return sequence.slice(0, terms); 
}

let termCount = parseInt(prompt("Enter the number of terms for the Fibonacci sequence:"));
alert("Fibonacci sequence up to " + termCount + " terms: " + fibonacci(termCount).join(", "));
