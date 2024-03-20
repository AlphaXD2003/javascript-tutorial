const company = {
    name: 'wn ltd',
    employee: 23,
    greeting: function (){
        console.log(this)
        console.log(`Welcome to ${company.name}`)
    }
}

const username = {
    name: 'Wribhu Nandi',
    hello: function (){
        console.log(`Welcome to ${company.name}`)
        company.greeting();
    }
}
//username.hello()

//console.log(company.name)
//console.log(name)
//company.greeting()

function func1(){
    setTimeout(() => {
        console.log('hello')
    }, 2000);
}
//func1()

//console.log(this)

const func2 = () => {
    let name = 'wribhu'
    console.log(this)
}
//func2()
//console.log(this)
const func3 = function (){
    let name = 'wribhu'
    console.log(this.name)
    const func4 = () => {
        console.log(this)
    }
    func4()
}
//func3()

function func5(){
    let name = 'wribhu'
    console.log(this.name)
}

func5()