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

//연산자 
//1.산술 연산자 (사칙연산, %(모듈러,나머지), **(제곱))
//2의 3승
console.log(2 ** 3);

//2. 증감 연산자 (++, --)
let num = 10;
num++;
console.log(num);
num--;
console.log(num);

//3. 비교 연산자 (==, !=, <>, >=, <=, ===(두 값의 타입까지 비교하므로 더 정확함))
const a = 10;
const b = 20;
//true
console.log(a<b);
//false
console.log(a===b);
//true
console.log(a!==b);

//4. 논리 연산자 (&&, ||, !)
const c = 2 < 3 ;
const d = 30 > 50;

console.log("양변의 값이 참이어야 참:"+c && d);
console.log("양변의 값이 참이어야 참:"+c || d);
console.log(!c);

//5. 삼항 연산자 (조건에 따라 다른 결과를 출력)
//조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분
console.log(2 > 3 ? "참" : "거짓");

//6. 널리쉬 (널 병합 연산자)
//?? 여러 개의 피연산자 중 값이 확정되어 있는 변수를 찾는다. 
const aaa = undefined;
const bbb = null;
const ccc = '유선영';

//값이 들어있는 ccc 변수 값 유선영 출력
console.log(aaa ?? bbb ?? ccc);

//7. 비트 연산자 (&, |, ~, ^, <<, >>)

//8. 복합 대입 연산자 (+=, -=, *=, %= ...)
let num2 = 10;
num2 = num2+2;
num2 += 2;
console.log(num2);

//9. 전개 구문 (반복이 가능한 모든 객체에 적용 가능, 문자열, 배열 등에 사용)
const n = [1, 2, 3];
//1, 2, 3
console.log(...n);
console.log(n);

const numbers111 = [1, 2, 3];
const numbers222 = [4, 5, 6];

const newNumbers = [...numbers111, ...numbers222];
console.log(newNumbers);


const phy = [numbers111, numbers222];
console.log(phy);
