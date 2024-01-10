// class keyword
const log = console.log;

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name,
        this.year = year
    }

    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    set name(name) {
        this.name = name;
    }
}

// constructor 생성자

const youn = new IdolModel('윤여찬', 1992);
log(youn);

youn.name = '여찬';
log(youn);

class IdolModel2 {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name () {
        return this.#name;
    }

    set name (name) {
        this.#name = name;
    }
}

const youn2 = new IdolModel2('여찬ㅇ', 1992);
log(youn2);
log(youn2.name);

log(youn2.name)

class User {
    constructor(name) {
        this.name = name;
    }
}

let names = new User('윤여찬');
let name2 = new User('찬찬');

log(names);
log(name2);
