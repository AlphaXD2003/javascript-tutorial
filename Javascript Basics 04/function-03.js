//arrow function

function hello1(){
    console.log('Hello1')
}

hello1()
const hello2 = function(){
    console.log('Hello2')
}

hello2()

// arrow funcition
const hello3 = () => {
    console.log('hello3')
}
hello3()


const print = (word) => {
    console.log(`${word}`)
}

print('wribhu')

const sum1 = (num1, num2) => (
    num1 + num2
)
const sum2 = (num1, num2) => (
 [ num1 + num2, num1 / num2]  
)

/*

function sum2(num1, num2){
    let sum = num1 + num2;
    let div = num1/num2;
    return [sum, div]
}

*/

console.log(sum1(5,6))

let x = sum2(5,6)
console.log(x[0])
console.log(x[1])


const sum3  = (num1, num2 ) => [num1 + num2, num1 / num2]

console.log (sum3(5,6)[0])
console.log (sum3(5,6)[1])

const print1 = num1 => console.log(num1)
print1(1)



function printName(name='wribhu'){
    console.log(name)
}
//printName('sonu') 
//printName() 



