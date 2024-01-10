// function hello() {};
// hello.a = 'really?';

// const array = [];
// array.b = 'wow';

// log(hello);
// log(array);


// let a = { name: 'youn' };
// const arr = [1, 2, a];

// log(a === arr[2]);

// let increase = function(num) {
// 	return ++num;
// };

// let decrease = function (num) {
//   return --num;
// };

// let predicates = { increase, decrease };

// function makeCounter(predicate) {
// 	let num = 0;

// 	return function () {
// 		num = predicate(num);
// 		return num;
// 	}
// }

// let increaser = makeCounter(predicates.increase);

// log(increaser()); // 1
// log(increaser()); // 2

// let decreaser = makeCounter(predicates.decrease);

// log(decreaser()); // -1
// log(decreaser()); // -2

// let foo = function (p1, p2) {
// 	log(p1, p2);
// };

// foo(1); // 1, undefined

// function changeVal(primitive, obj) {
//     primitive += 100;
//     obj.name = 'Kim';
//     obj.gender = 'female';
// }

// var num = 100;
// // 객체를 보낸다.
// var obj = {
//     name: 'Lee',
//     gender: 'male'
// };

// log(num); // 100
// log(obj); // Object {name: 'Lee', gender: 'male'}

// changeVal(num, obj);

// log(num); // 100
// //  값이 변경됨을 확인할 수 있다.
// log(obj); // Object {name: 'Kim', gender: 'female'}

// function calculateArea(width, height) {
//     let area = width * height;
//     return area; // 단일 값의 반환
// }

// log(calculateArea(3, 5)); // 15
// log(calculateArea(8, 5)); // 40
  
// function getSize(width, height, depth) {
//     let area = width * height;
//     let volume = width * height * depth;

//     return [area, volume]; // 복수 값의 반환
// }
  
// log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
// log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18

// function multiply(x, y) {
//     log(arguments);
//     return x * y;
// }
  
// multiply();        // {}
// multiply(1);       // { '0': 1 }
// multiply(1, 2);    // { '0': 1, '1': 2 }
// multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, numbers);

// log(max); // 7

// const min = Math.min.apply(null, numbers);

// log(min); // 2

// function sum() {
//     if(!arguments.length) return 0;

//     let arr = Array.prototype.slice.call(arguments);
//     return arr.reduce(function(pre, cur) {
//         return pre + cur;
//     });
// }

// log(sum(1, 2, 3, 4, 5));

let log = console.log;

function foo(func) {
    var res = func();
    return res;
}
  
function bar() {
    return 'caller : ' + bar.caller;
}

log(foo(bar)); 
// log(bar());