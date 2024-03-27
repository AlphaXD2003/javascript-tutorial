// for(<intialization> ;<condition> ; <process after operation>)

let i = 5
for(; i  >= 0; i  = i  - 1){
    if(i == 3){
        console.log('I found 3')
        continue
    }
    if( i==1){
        break;
    }

    console.log(i)   
}


let myArray = ['wribhu', 'ronit', 'amit']
console.log('length: ',myArray.length)
for(let i = 0; i < myArray.length; i++){
    if(i == 1){
        continue
    }
    console.log(myArray[i])

}

