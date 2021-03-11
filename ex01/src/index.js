function main(numOne, numTwo){

var quotient;
if(numOne == 0){
    quotient = `Divide by 0! Cannot divide by zero!`;
} else {
    // Only change code below this line
quotient = numOne / numTwo
    // Only change code above this line
}
return quotient;
}
console.log(main(15, 3));
console.log(main(420, 10));
console.log(main(0, 55));  
module.exports = main;