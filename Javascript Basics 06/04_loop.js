// for of
// for (variable of iterable)
const arr = [1,2,3,4,5]
for(const index of arr){
    console.log(index)
}

const name = 'wribhu'
//console.log(name[1])
for(const letter of name){
    console.log(letter)
}

const map = new Map()
map.set('amit', 'roy')
map.set('wribhu', 'nandi')
console.log(map)

for(const key of map){
    console.log(key)
}
for(const [key, value] of map){
    console.log(key, value)
}