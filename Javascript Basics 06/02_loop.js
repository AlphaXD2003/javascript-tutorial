/*let myArray = ['wribhu', 'ronit', 'amit']
console.log('length: ',myArray.length)
for(let i = 0; i < myArray.length; i++){
    if(i == 1){
        continue
    }
    console.log(myArray[i])

}*/

//while(condition) loop
let myArray = ['wribhu', 'ronit', 'amit']
let i = 0
while(i < myArray.length){
    if(i ==1 ){
        i++
        continue
    }
    console.log(myArray[i])
    i++
}