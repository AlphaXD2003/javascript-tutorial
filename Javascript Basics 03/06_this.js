const func1 = function(){
    let name = 'wribhu'
   const obj = {}
    obj.name = name
    
    return obj
}
//const mainObj = func1()
//console.log(mainObj)

function func2(name = 'wribhu'){
    // this = {}
    //console.log('Empty this:', this)
    //console.log('Type of this:', typeof this)
    this.name = name
    this.surname = 'nandi'
    //console.log( 'This inside the function ' , this)
    //return this
}
let user1 =  new func2('wribhu1')
let user2 =  new func2()
//console.log(user1)
//console.log(user2)

/* Will throw Error
const func3 = () => {
    this.name = 'wribhu'
    this.surname = 'nandi'
}
const user3 = new func3()
console.log(user3)
*/


function User(name){
    console.log('New.target' ,new.target)
    if(!new.target){
        return new User(name);
    }
    this.name = name
    this.surName = 'nandi'
}

let wribhu = User('wribhu')
console.log(wribhu)
console.log(wribhu.name)
console.log(wribhu['surName'])


/*
function User(name){
    //this = {}
    this.name = name
    // return this
}
let wribhu = new User('wribhu')
console.log(wribhu.name)
*/
/*
const  User1 = (name) =>{
    console.log('New.target' ,new.target)
    if(!new.target){
        return new User1(name);
    }
    this.name = name
    this.surName = 'nandi'
}

let wribhu1 = User1('wribhu')
console.log(wribhu1)
console.log(wribhu1.name)
console.log(wribhu1['surName'])
*/


const user4 = function(name){
    this.name = name
   
    // if the returnType is object then return the object else return this
    return {name: 'Wribhu'}
    // return
}
const objUser4 = new user4('nandi')
console.log(objUser4.name)

const user5 = function(){
    this.name = 'wribhu'
}
// console.log(new user5.name) <= error
console.log(new user5().name)
const objUser5 = new user5
console.log('Obj5: ' , objUser5.name)
