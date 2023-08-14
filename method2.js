const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one, two, three);

const obj = {
    x: 10, 
    y: 20,
}

//콜론으로 별명 사용 가능
const {x:alias,y:alias2} = obj;
console.log(alias, alias2);

const obj2 = {
    one111:{
        two111: {
            three111: 'bingo',
        },
    },
};

const {
    one111: {
        two111: { three111:alias3 },
    },
} = obj2;

console.log(alias3);


function sum (obj){
    return obj.x+obj.y;
}
console.log(sum(obj));

function sum2 ({x,y}){
    return x+y;
}
console.log(sum2(obj));


let a = 123;
let b = 456;
//1. 변수의 값 교환 - 재할당
//let temp = a;
//a = b;
//b = temp;
//2. 변수의 값 교환 - 배열활용
[a,b]=[b,a];
//3. 구조분해할당
const [a1 = 10, b1 = 20] = [10];
console.log(a1,b1);

const arr3 = [1, 2, 3, 4, 5];
const [one333, ,three333, ,five333] = arr3;
console.log(arr);

const [one444, two444, ...others] = arr3;
console.log(one444, two444, others);












