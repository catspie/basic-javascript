const str = 'Hello World';
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(3));
//음수면 뒤에서부터 자르기
console.log(str.slice(-3));
console.log(str.slice(3,5));

const hello = '         hello';
console.log(hello.trim());
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.repeat(3));

console.log(hello.padStart(10, '_'));
console.log(hello.padEnd(10, '_'));

const string = '안녕하세요 유선영입니다.';
console.log(string.indexOf('선영'));
//없으면 -1 반환
console.log(string.indexOf('한국'));
console.log(string.includes('선영'));
console.log(string.startsWith('안녕'));
console.log(string.replace('유선영', '개발자'));

const day = '월요일, 화요일, 수요일, 목요일, 금요일';
console.log(day.split(','));

const arr = [1, 2, 3, 4, 5];
//arr.push(6);
//arr.push(7, 8);

//arr.unshift(10, 20, 30);
//arr.shift(10, 20, 30);

//배열 요소에 1씩 더함 
arr.shift();
arr.shift();

console.log(arr);

//배열의 요소 위치 찾기
function print(number, index){
    console.log(`${index} 위치의 요소: ${number}`);
}

arr.forEach(print);
console.log(arr.find((number) => number>3));
arr.fill(10, 1, 3);
console.log(arr);
//배열에 대한 얕은 복사, 원본 배열은 바뀌지 않는다. 
arr.splice(2, 1, 999);
console.log(arr);
console.log(arr.splice(2, 4));

const word = ['hello', 'world', 'hi', 'wow'];
//각 요소를 ; 로 구분
console.log(word.join(';'));

const num = [123, 456];
//문자열 붙이기
console.log(word.concat('zzz','bbb'));
console.log(word.filter((number)=>number<3));
//필수인자인 acc, cur을 가지고 선택적으로 인덱스, 원본 배열 인자를 가질 수 있다. 
const reducer = (acc, value) => acc + value;
console.log(word.reduce(reducer, 10));

//for in은 객체에서 사용하고, for of 는 iterator 속성을 가지는 반복이 가능한 객체에서 사용한다. 
 const obj = {
    x: 1, 
    y: 2, 
    z: 3,
 }

 //객체 안의 요소 값 
 for(key in obj){
   console.log(key); 
 }

// 전역 객체 object 안에 있는 keys 라는 정적 메소드를 사용
 console.log(Object.keys(obj));
 console.log(Array.isArray(obj));
 console.log(Object.entries(obj));

 const name = '유선영';
 const country = 'KR';
 const user = {
    name: name, 
    country: country,
 }

 console.log(user);

 //객체 속 함수 선언부 
 const obj2 = {
    greeting: function(){
        console.log('HI!');
    },
 };
//객체 속 함수 호출부
 obj2.greeting();

 //구조 분해 할당
 


