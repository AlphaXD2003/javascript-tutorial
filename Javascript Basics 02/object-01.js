/*
let obj = {
        key : value
}
obj.key
*/

let mySymbol1 = Symbol('123')
let mySymbol2 = Symbol('123')

let obj = {
    name: 'wribhu',
    'surname': 'nandi',
    'full name' : 'wribhu nandi', //full name
    'mySymbol1' : 'key1',
    [mySymbol2] : 'key2',
    isBool : false,
    number : 123
}

console.log(obj.name)
console.log(obj['surname'])
console.log(obj['full name'])

console.log(obj['mySymbol1'])
console.log(typeof obj['mySymbol1'])

console.log(obj[mySymbol2])
console.log(typeof obj[mySymbol2])
console.log(typeof Object.keys(obj)[4])


//using new key word
let newobj = new Object()
newobj = {
    name : 'wribhu',
    surname : 'nandi'
}
console.log(newobj)

let newObj1 = {
    firstname : 'wribhu',
    lastname : 'nandi'
}

newObj1.firstname = 'wr'
newObj1.middlename = 'wr'
console.log(newObj1)
