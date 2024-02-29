const badHobby = ['simping', 'flirting' ]
const goodHobby = ['coding', 'sleeping', 'donothing']

//console.log(typeof badHobby[2])
//console.log(typeof badHobby[0])
//console.log(badHobby)
//console.log(goodHobby)
//badHobby.push(goodHobby)
//console.log(badHobby)
//console.log(badHobby[2][1])

//let newHobby = goodHobby.concat(badHobby)
//let newHobby = goodHobby.concat(badHobby).concat(badHobby)
//console.log(newHobby)

//let anotherNewHobby = [...badHobby, ...goodHobby]
//console.log(anotherNewHobby)

const anotherSuperArray = [1,2,3,[4,5,[6,7,[8,9]]]]

const anotherSuperArrayFlat = anotherSuperArray.flat(Infinity)
//console.log(anotherSuperArray)
//console.log(anotherSuperArrayFlat)


const name = 'wribhu'
console.log(typeof name)
console.log(Array.isArray(name))
const nameArray = Array.from(name)
console.log(nameArray)
console.log(Array.isArray(nameArray))
//console.log(Array.isArray({name:'wribhu'}))
//console.log(Array.from({name:'wribhu'})) <= []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
console.log(Array.from(score1))