const log = console.log;

/**
 * Array Functions
*/

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

log(iveMembers);

// push - array에 맨 끝에 아이템 추가, 직접적으로 변경함으로 인해 실제 배열에 추가 됨
iveMembers.push('코드펙토리');
log(iveMembers);

// pop - array 맨 끝에 아이템 제거
iveMembers.pop();
log(iveMembers);

// shift - array 맨 앞에 아이템 제거
iveMembers.shift();
log(iveMembers);

// unshift - push랑 같다. 이건 array에 맨 앞에 아이템 추가 
iveMembers.unshift('안유진');
log(iveMembers);

// splice - 파라미터 첫번째는 어디서 부터 두번째는 어디까지 삭제할 것 인가?
iveMembers.splice(0, 3);
log(iveMembers);

iveMembers.unshift('안유진', '가을', '레이');
log(iveMembers);

// 원래 배열을 건들이는 것은 좋지 않다. 그렇기에 위에 함수들을 사용하는 것은 옳지 않다.

// concat - push 함수와 같아보이지만 다르다. 원본의 배열을 건들이지 않는다.
log(iveMembers.concat('코드펙토리'));
log(iveMembers);

// slice - splice와 다르게 원본 배열을 건들이지 않는다.
log(iveMembers.slice(0, 3));
log(iveMembers);

// spread operator 
let iveMembers2 = [
    ...iveMembers,
]
log('-----------------_');
log(iveMembers2);

let iveMembers3 = [
    iveMembers,
]
log(iveMembers3);

let iveMembers4 = iveMembers;
log(iveMembers4);
log(iveMembers4 === iveMembers);
log('-----------------_');

//join - , 기준으로 출력됨 나눔의 기준을 설정할 수 있다. (아귀먼트로)
log(iveMembers.join());
log(iveMembers.join('/'));
log(iveMembers.join(', '));

log('-----------------_');
// sort - 정렬을 할 수 있다. 기본은 오름차순 정렬
iveMembers.sort();
log(iveMembers);

// reverse - 내림차순 정렬
log(iveMembers.reverse());

let numbers = [
    1, 9, 7, 5, 3
];

log('-----------------_');
log(numbers);
numbers.sort((a, b) => {
    return a > b ? 1 : -1
});
log(numbers);
numbers.sort((a, b) => a > b ? -1 : 1);
log(numbers);

log('-----------------_');
// map - array 값들을 모두 순회하며 각각의 값을 변환 시킬 수 있다.
log(iveMembers.map((x) => x));
log(iveMembers.map((x) => `아이브: ${x}`));
log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브 리더: ${x}`
    } else {
        return x;
    }
}))
// map은 원본 배열에 영향을 주지 않는다!
log(iveMembers);

// filter - true를 반환하면 해당 값을 킾
log('-----------------_');
numbers = [1, 8, 7, 6, 3];
log(numbers.filter((x) => x % 2 === 0));

log('-----------------_');
// find - 첫번째로 해당하는 값을 반환한다.
log(numbers.find((x) => x % 2 === 0));

log('-----------------_');
//findIndex - 첫번째로 해당하는 값의 인덱스를 반환
log(numbers.findIndex((x) => x % 2 === 0));

log('-----------------_');
// reduce - 
log(numbers.reduce((p, n) => p + n, 0));
