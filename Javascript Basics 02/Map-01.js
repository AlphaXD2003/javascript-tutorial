/*A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.
*/
const map = new Map()
map.set('amit', 'roy')
map.set('wribhu', 'nandi')
console.log(map)

console.log(map.keys())
console.log(map.get('amit'))