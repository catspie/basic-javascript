//함수
function sum222(a,b){
    console.log(a+b);
}
const sum = function sum(a,b){
    console.log(a+b);
};

sum(10,20);
const sum444 = (a, b) => a + b;
console.log(sum444);

//화살표 함수
const sum333 = (a, b) => console.log(a+b);

function hello111(){
    console.log('Hello');
    console.log('World');

}
const hello222 = () => {   
    console.log('Hello');
    console.log('World');
};
hello111();

function greeting(user){
    console.log(`Hello ${user}!`);
}
const greeting222 = (user) => {
    console.log(`Hello, ${user}!`);
};

greeting('유선영');