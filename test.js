let log = console.log;

// // 기명 즉시 실행 함수
// (function myFunction() {
//     let a = 3;
//     let b = 5;

//     return a * b;
// }());

// // 익명 즉시 실행 함수
// (function() {
//     let a = 3;
//     let b = 5;

//     return a * b;
// }());
// function parent(param) {
//     let parentVar = param;

//     function child() {
//         let childVar = 'youn';
//         log(parentVar + ' ' + childVar);
//     }
//     child();

//     log(parentVar + ' ' + childVar);
// }

// parent('Hello~');

// function sayHello(name) {
//     let text = 'hello ' + name;
//     let logHello = function() { log(text) };
//     logHello();
// }

// sayHello('youn');
// logHello('youn');


// // 피보나치 수열
// // 피보나치 수열은 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
// function fibonacci(n) {
//     if (n < 2) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// log(fibonacci(0));
// log(fibonacci(1));
// log(fibonacci(2));
// log(fibonacci(3));
// log(fibonacci(4));
// log(fibonacci(5));
// log(fibonacci(6));

// // 팩토리얼
// // 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// function factorial(n) {
//     if (n < 2) return 1;
//     return factorial(n - 1) * n;
// }

// log(factorial(0));
// log(factorial(1));
// log(factorial(2));
// log(factorial(3));
// log(factorial(4));
// log(factorial(5));
// log(factorial(6));

// let func1 = () => {
//     func2();
//     log('call func1');
// } 

// let func2 = () => {
//     func3();
//     log('call func2');
// } 

// let func3 = () => {
//     log('call func3');
// }

// func1();

// let func1 = () => {
//     setTimeout(() => {
//         log('2초 뒤에 실행하는 callback function')
//     }, 2000);
// }

// let func2 = () => {
//     for(let i = 0; i < 8000000000; i++) {
//     }
//     log('약 5초가 걸리는 함수');
// }

// func1();
// func2();

// const mulitply =  function(x,y,z) {
//     log(arguments);

//     return x * y * z;
// }

// mulitply(3, 4, 5)

