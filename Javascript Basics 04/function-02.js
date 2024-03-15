const addNumber = function(num1, num2){
    return num1 + num2
}
let x = addNumber(30,40)
//console.log(x)
//console.log(addNumber(20, 30))


// Scope


let a = 20;
var b = 50;
function print(a){
    this.a = 30
    console.log(a)
    console.log(this.a)
}
print(a)
console.log(this)