const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId)


//BigInt
const myBigInt = 156458646548465484654165165486916548946548
const myNewBigInt = 156458646548465484654165165486916548946548n
console.log(typeof myBigInt)
console.log(typeof myNewBigInt)