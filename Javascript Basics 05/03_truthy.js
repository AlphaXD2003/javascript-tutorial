let a = 'wribhu'
if(!a){
    console.log('nandi')
}
else{
    console.log('uguyf')
}

a = function(){
    console.log('hi')
}
if( function(){
    console.log('hi')}){
    console.log('nandi')
}
else{
    console.log('uguyf')
}

//truthy values
// "0", 'false', " ", [], {}, function(){}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN