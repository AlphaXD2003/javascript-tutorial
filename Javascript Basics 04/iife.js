// immediately invoked function expression

// (function())()
(function print1(){
    console.log('Hello1')
})();
(function print2(){
    console.log('Hello2')
})();
(function print3(){
    console.log('Hello3')
})();

(function print4(name){
    console.log(`${name}`)
})('wribhu');

// print1() <= will produce error