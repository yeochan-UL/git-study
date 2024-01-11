/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에
 * 평가 된다.
*/ 
const log = console.log;

// const testFunction = function() {
//     return this;
// }

// log(testFunction());
// log(testFunction() === global);

// const yuJin = {
//     name: '안유진',
//     year: 2003,
//     sayHello: function() {
//         return `안녕하세요 저는 ${this.name} 입니다.`;
//     }
// }

// log(yuJin);


let person = {
    'first-name': 'yeochan',
    'last-name': 'youn',
};
  
delete person.age;
console.log(person.age); // undefined
  
delete person;
log(person);

delete person["first-name"];
log(person);