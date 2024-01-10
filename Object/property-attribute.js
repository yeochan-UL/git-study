/**
 * property attribute
 *
 * 값에 속성들
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고있지 않지만 다른 값을 가져오거나 설정할때 호출되는 함수로 구성된 프로퍼티
 * 2-ex) getter와 setter
*/
let log = console.log;

const yuJin = {
    name: '안유진',
    year: 2003
};

log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정하거나 못하게할 수 있다.
 * 3) enumerable - 열거가 가능한지 여부
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판단.
*/
log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
log(yuJin2);
log(yuJin2.age);

yuJin2.age = 32;
log(yuJin2.age);
log(yuJin2.year);

log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})

log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
log(yuJin2);

// Enumerable - 열거
log(Object.keys(yuJin2));

for(let key in yuJin2) {
    log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
});

log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
log('-------------------_');
log(Object.keys(yuJin2));

for(let key in yuJin2) {
    log(key);
}

log(yuJin2);
log(yuJin2.name);

// configurable
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
})

log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// })

Object.defineProperty(yuJin2, 'height', {
    value: 172,
})

log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

Object.defineProperty(yuJin2, 'height', {
    writable: false,
})
