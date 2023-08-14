//DOM (Document Object Model) - 인터페이스
//html 요소들은 html DOM을 통과하여 조작, 생성된다. 

/* 
const title = document.createElement('h1');
title.innerText = '새로운 친구에요!';
title.style.color = 'red';
const body = document.querySelector('body');
body.appendChild(title);
*/

//이벤트의 추가와 삭제
const button = document.querySelector('button');
const removeButton = document.querySelector('.remove');

//함수를 인자로 전달
function handler (event){
    console.log('♥');
}
//삭제
function removeHandler (event){
    button.removeEventListener('click', handler);
}

//버튼 클릭시 pointer event 함수 실행
button.addEventListener('click', handler);
removeButton.addEventListener('click', removeHandler);

//모듈: 관련된 함수들을 모아 하나의 모듈로서 사용
// Named Export
//1. exoprt 할 함수 만들기 
//2. html에서 script type = "module" 로지정
//3. import {함수명} from '파일 위치'
//4. 해당 위치에서 함수 사용
//import { greeting } from './hello.js'

//default Export 방법 
//괄호 생략 가능, 함수 이름 변경 가능
import hello from './hello.js'
hello();

