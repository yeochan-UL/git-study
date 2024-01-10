const log = console.log;

// class HelloHi {
//     name;
//     year;
//     static gou = '울랄라랩';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static ret() {
//         return '울랄라랩';
//     }
// }

// const youn = new HelloHi('여찬', 1992);
// log(youn);

// log(HelloHi.gou);
// log(HelloHi.ret());

class Hi {
    name;
    year;

    constructor (name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(obj) {
        return new Hi(
            obj.name,
            obj.year
        );
    }
    static fromList(list) {
        return new Hi (
            list[0],
            list[1]
        )
    }
}

const hiHello = Hi.fromObject({
    name: '윤여찬', year: 1992
});
log(hiHello)

const hahahah = Hi.fromList(
    [
        '여찬',
        1992
    ]
);

log(hahahah)