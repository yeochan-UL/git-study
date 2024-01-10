/**
 * 클래스는 객체지향 프로그래밍에서
 * 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * 
 * 상속은 객체들 간의 관계를 구축하는 방법이다.
 * 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로 부터 속성과 동작을 상속 받을 수 있다.
*/
const log = console.log;

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// idoModel을 상속 받음
class FemaleIdolModel extends IdolModel {
    dance() {
        return `${this.name} 춤을 춥니다.`
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `${this.name} 노래를 부릅니다.`
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
const jimin = new MaleIdolModel('지민', 1995);
log(yujin);
log(jimin);

log(yujin.dance());
log(jimin.sing());

log(yujin instanceof IdolModel);
log(yujin instanceof FemaleIdolModel);
log(yujin instanceof MaleIdolModel);
log('---------------_');
log(jimin instanceof IdolModel);
log(jimin instanceof FemaleIdolModel);
log(jimin instanceof MaleIdolModel);