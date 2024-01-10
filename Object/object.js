/**
 * all about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) fucntion을 사용해서 객체 생성
*/ 

let log = console.log;

// 1
const yujin = {
    name: '안유진',
    year: 2003
}

log(yujin);

// 2
class IdolModel {
    name;
    year;

    constructor (name, year) {
        this.name = name,
        this.year = year
    }
}

log(new IdolModel('안유진', 2003));

// 3 생성자 함수
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
log(gaEul);