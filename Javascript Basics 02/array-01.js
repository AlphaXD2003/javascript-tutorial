//array non-primitive
const myArr1 = [0, 1, 2, 3]
const myArr2 = new Array(4,5,6,7)
//console.log(myArr1)
//console.log(myArr2[1])


//Array methods
myArr1.push(6)
myArr1.push(7)
//console.log(myArr1)
myArr1.pop()
//console.log(myArr1)


myArr1.unshift(9)
myArr1.unshift(8)
myArr1.shift()
//console.log(myArr1)


console.log(myArr1.includes(9))
console.log(myArr1.indexOf(9))

let myArr3 = myArr1.join() //9,0,1,2,3,6
console.log(myArr3)
console.log(typeof myArr3)

myArr3 = myArr1.join("") //901236
console.log(myArr3)
console.log(myArr1)
console.log(typeof myArr3)

//slice , splice
//9,0,1,2,3,6
const myArr4 = myArr1.slice(1,3)
console.log("My array1: ",myArr1)
console.log("My array4: ",myArr4)
const myArr5 = myArr1.splice(1,3)
console.log("My array1: ",myArr1)
console.log("My array5: ",myArr5)