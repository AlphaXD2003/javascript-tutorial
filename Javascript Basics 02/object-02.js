/*const fbUser = {};

fbUser.id = '123wribhu'
fbUser['full name'] = 'wribhu nandi'
fbUser.id = '1233wribhu'

console.log(fbUser)


// nested object

const social_media = {
    email: 'wribu@123.com',
    full_name: {
        'user full name' : {
            firstname: 'wribhu',
            'last name': 'nandi'
        }
    }
}
console.log(social_media.full_name['user full name'].firstname)
console.log(social_media.full_name['user full name']['firstname'])
console.log(social_media.full_name['user full name']['last name'])
*/

const obj1 = {1: 'a' , 2 : 'b', 3 :"c"}
const obj2 = { 3 : 'c', 4 :"b"}
const obj3 = {5: 'a' , 6 : 'b'}

const obj4 = {obj1, obj2, obj3}
//console.log(obj4)
//console.log(obj4.obj1) //{ '1': 'a', '2': 'b', '3': 'c' }
//const emptyObj = {}
//const obj5 = Object.assign(emptyObj,obj1, obj2, obj3)
const obj5 = Object.assign({},obj1, obj2, obj3)
//console.log(obj5)
//console.log(emptyObj)
//console.log(obj1)

//console.log(obj1)
//console.log(Object.keys(obj1))
//console.log(Object.values(obj1))
//console.log(obj1.hasOwnProperty(1))
//console.log(obj1.hasOwnProperty('1'))
//console.log(typeof Object.keys(obj1)[0])

const name = {
    firstname : 'wribhu',
    lastname : 'nandi'
}

/*let {firstname, lastname} = name
console.log(lastname)
lastname = 'nndi'
console.log(name)
*/

const {lastname: lname} = name
console.log(lname)
//console.log(lastname)
