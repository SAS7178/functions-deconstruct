/* my hobby will be to go exercise
instructions*
1.get on my exercise clothes
2.put on my shoes
3.drive to the gym
4.construct my daily program
5.stretch & warm-up
6.intiate exercise
*/
//creating a var eaqual to a function expression 
//for each task


const getDressed = () => {
    console.log('put on gym clothes')
}
//function to get on gym clothes

const gymShoes = () => {
    console.log('put on gym shoes')
}
//funtion to put on gym shoes

const gymDrive = () => {
    console.log('drive to gym')
}
//function to drive to gym
 
const workoutPlan = () => {
    console.log('develop days program')
}
// function to build my exercise routine

const warmup = () => {
    console.log('stretch & warm-up')
}
// function to stretch and warmup

const executeWorkout = () => {
    console.log('get gains')
}
// function to do workout



/* creating a calculator making function to 
perform simple calculations*/
const add = (firstNumber,secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum;
    console.log(sum)
}
console.log(add(10,10))

const subtract = (firstNumber,secondNumber) => {
    const difference = firstNumber - secondNumber
    return difference;
    console.log(difference)
}
console.log(subtract(10,10))

const divide = (firstNumber,secondNumber) => {
    const quotient = firstNumber/secondNumber
    return quotient;
    console.log(quotient)
}
console.log(divide(10,10))

const multiply = (firstNumber,secondNumber) => {
    const product = firstNumber * secondNumber
    return product;
    console.log(product)
}
console.log(multiply(10,10))

const square = (firstNumber) => {
    const squared = firstNumber * firstNumber
    return squared;
    console.log(squared)
}
console.log(square(10))


let fourLegs =  multiply(60, .25)
let twoLegs = multiply(60, .75)
console.log(`There are ${fourLegs} four leg animals
and ${twoLegs} animals!`)