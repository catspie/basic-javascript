// 조건문
const abc = 10;
const def = 20;
const ghi = 20;

//조건이 하나인 경우 한 줄로 적어도 됨
if(a < b) console.log('a가 더 작아요');

if(a > b){
    console.log('a가 더 작아요');
}else if(b === c){
    console.log('b와 c가 같습니다.');
}else if(b !== c){
    console.log('b와 c가 같지 않습니다.');
}
else{
    console.log('a가 더 큽니다.')
}

//switch
const Lnumber = 10;
switch(Lnumber % 2){
    case 0: 
        console.log('짝수');
        break;
    case 1: 
        console.log('홀수');
        break;
    default : 
        console.log('아무것도 해당하지 않습니다.');
}

//반복문 (for)

//반복문 (while)
