//DOM (Document Object Model) - 인터페이스
//html 요소들은 html DOM을 통과하여 조작, 생성된다. 

//const title = document.getElementsByClassName('title_class');
//const title = document.querySelector('h2');
//title.innerText = '안녕!';
//title.style.color = 'blue';

const title = document.createElement('h1');
title.innerText = '새로운 친구에요!';
title.style.color = 'red';
const body = document.querySelector('body');
body.appendChild(title);