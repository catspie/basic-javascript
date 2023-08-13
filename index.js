//변수와 상수
let hi = '유선영';
console.log(hi);
const hello = '안녕하세요';
console.log(hello);

//원시 데이터 타입
const number = 123;
console.log(typeof number);
const age = 20;
const job = '개발자';

const message = '저는 '+job+"이고, "+age+"살 입니다."; 
const message2 = `저는 ${job}이고, ${age}살 입니다.`; 
console.log(message);
console.log(message2);

const isTrue = 10 < 20;
console.log(typeof isTrue);

//참조 데이터 타입
const arr = [1, 2, 3, [4, 5]];
console.log(arr[0]);

//참조 데이터 타입 - 배열 안에 배열 넣을 수 있음 
console.log(arr[3]);

const obj = {
  arr: [1, 2, 3],
  something: {
    name: '박호영', 
    age: 21, 
    job: 'devOps'
  },
}
console.log(obj);

//참조 데이터 타입 - 객체에 접근하는 두 가지 방법
console.log(obj.name);
console.log(obj['name']);
//참조 데이터 타입 - 객체 속 객체에 접근하는 방법 
console.log(obj.something.name);