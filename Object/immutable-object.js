const log = console.log;

// const yuJin = {
//     name: '안유진',
//     year: 2003,

//     get age() {
//         return new Date().getFullYear() - this.year;
//     },
//     set age(age) {
//         this.year = new Date().getFullYear() - age;
//     }
// };

// log(yuJin);
// log(Object.isExtensible(yuJin));

// yuJin['position'] = 'vocal';
// log(yuJin);


// Object.preventExtensions(yuJin);
// log(Object.isExtensible(yuJin));

// yuJin['groupName'] = 'ive';
// log(yuJin);

// delete yuJin['position'];
// log(yuJin);

// seal
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

log(yuJin2);
log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

log(Object.isSealed(yuJin2));

yuJin2['groupName'] = 'ive';
log(yuJin2);

delete yuJin2['name'];
log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value: '코드펙토리'
});

log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

// Freezed - 읽기 외에 모든 기능 불가능하게 만듬
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

log(Object.isFrozen(yuJin3));
log('-------------------------------------_')
Object.freeze(yuJin3);
log(Object.isFrozen(yuJin3));