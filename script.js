// function calculateSquare(a) {
//     return a * a;
// }
// console.log(calculateSquare(7));

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4));

// function calculateArea(l, b) {
//     let area = l * b;
//     return area;
// }
// console.log(calculateArea(10, 16));

// function findMax(x, y) {
//     if(x > y){
//         return x;
//     }
//     else{
//         return y;
//     }
// }
// console.log(findMax(7, 9));

// function reverseString(str){
//     let str1 = str.reverse(str)
//     return str1;
// }
// console.log(reverseString("hello"));

// function calculateFactorial(n){
//     let product = 1;
//     let i;
//     for(i=1; i<=n; i++){
//         product *= i; 
//     }
//     return product;
// }
// console.log(calculateFactorial(5));

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true; 
//     if (num % 2 === 0) return false;

//     for (let i = 3; i * i <= num; i += 2) { 
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));

// function isPositive(n) {
//     if(n > 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPositive(3));

// function countDigits(num) {
//     if(num < 0){
//         return "Input must be a positive integer"
//     }
//     return num.toString().length;
// }
// console.log(countDigits(12345));

// function changeContext() {
//     const button = document.getElementById("changeButton").innerText = "Clicked!"
// }

// function resetText() {
//     document.getElementById("heading").innerHTML = "Welcome!"
// }

// function changeColor() {
//     document.getElementById("heading").style.color = "red"
// }

// function calculatesquare() {
//     let num = prompt("Enter a number: ");
//     let square = num * num;
//     return alert("The square of " + num + " is " + square);
// }
// calculatesquare()