/*function func1(){
    console.log('hello')
}*/
const func1 = function(){
    let a = 10
    const subFunc1 = function(){
        a++
        console.log(a)
    }
    subFunc1()
    //console.log('hello')
}
const func2 = function(){
    let a = 10
    const subFunc2 = function(){
        a++
        console.log(a)
    }
    subFunc2()
}

func1()
func2()

