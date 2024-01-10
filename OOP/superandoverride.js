/**
 * super and override
*/
const log = console.log;

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕? ${this.name} 이라고 해`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤 / 특기 창
    part;

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        return `${super.sayHello()} ${this.part}를 맡고있다.`
    }
}

const yujin = new FemaleIdolModel('안유진', 2003, '리더');
log(yujin);

const wonYoung = new IdolModel('장원영', 2002);
log(wonYoung);
log(wonYoung.sayHello());
log(yujin.sayHello());