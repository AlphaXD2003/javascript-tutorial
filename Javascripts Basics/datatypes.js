//datatypes

//bbssnu
//Boolean , BigInt , String , Symbol , null , undefined

let bool = false
console.log(typeof bool)

let name = "wribhu"
let sirname = 'nandi'
let course = `bsc`

console.log(`My name is : ${name} ${sirname}`) // string interpolation


let temp = null;
console.log(typeof temp)

let a;
a = 5;
console.log(typeof a)


//typeof


//object
 let myObj = {
    name : "wribhu",
    "sir name": "nandi"
 }

 console.log(myObj.name)
 console.log(myObj["name"])
 console.log(myObj["sir name"])

 //primitive vs non primitive

 let myName = "subhamoy"
 let yourName = myName
 yourName = "wribhu"
 console.log(`My name is ${myName} and your name is ${yourName}`)
 

 let myname = {
    name : "subhamoy"
 }

 let yourname = myname

 console.log(yourname.name)
 yourname.name = "wribhu"
 console.log("Your name is :" , yourname.name)
 console.log("My name is :" , myname.name)


 