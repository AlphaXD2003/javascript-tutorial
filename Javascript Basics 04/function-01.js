/*
let a =50;
let b = 60;

console.log(a+b)

a = 60
b = 70
console.log(a+b)
*/


function sayMyName(){
    console.log('My name is Wribhu Nandi.')
}

//sayMyName()
//sayMyName()
//sayMyName()

function sayMyExactName(name){
    console.log(typeof name)
    console.log(`My name is ${name}.`)
}

//sayMyExactName('Ami jani na')

function addTwoNumbers(num1, num2){
    //let result = num1 + num2;
    //console.log(result)
   // let result = num1 + num2;
   // return result;
   return num1 + num2

}

//addTwoNumbers(20, 30)
//let x = addTwoNumbers(20, 30)
//console.log(x)

//let firstNumber = Number(prompt('Enter the number: '))
//let secondNumber = Number(prompt('Enter the number: '))

//addTwoNumbers(firstNumber, secondNumber)


function sumOnlyDigit(num1, num2){

    if(typeof Number(num1) === typeof 2 && typeof num2 === typeof 1){
        console.log(Number(num1) + num2)
    }
    else{
        return console.log('Invalid Number.')
    }
}

//sumOnlyDigit('abc', 30)

function addTwoNumber(num1, num2){
    return num1 + num2
}
function addThreeNumber(num1, num2, num3){
    return num1 + num2 + num3
}




let y = 20
function handleNumber(){
    y = 10
}
function handleAnotherNumber(y){
    y = 10
}
function printNumber(){
    console.log(y)
}
handleNumber()
handleAnotherNumber(y)
//console.log(y)

printNumber()



let obj = {
    name: 'wribhu',
    email: 'wribhu@123.com'
}

function handleMyObj(obj){
    obj.name = 'sonu'
}

handleMyObj(obj)
console.log(obj.name)


const array = [10, 20, 30]
function newArray(array){
    array[1] = 30
}
newArray(array)
console.log(array)



function handle1(y){
    y = y
    console.log(y)
    handle2()
}
function handle2(y){
    y = 30
    console.log(y)
    handle3()
    
}
function handle3(y){
    y = 40
    console.log(y)

}
console.log('````````````````````````````````````')
y = 10;
handle1(y)
console.log(y)