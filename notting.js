// const loginForm = document.querySelector("#login-form");

// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// const HIDDEN_CLASS = "hidden";
// const USERNAME_KEY = "username";

// // 로그인 서브밋
// function onLoginSubmit(event){
//     event.preventDefault(); // 기본 설정된 이벤트 제거
//     // 유저의 아이디를 변수에 담음.
//     const username = loginInput.value;
//     // 브라우저 저장소에 KEY값 "username", 유저 아이디를 저장함
//     localStorage.setItem(USERNAME_KEY, username);
//     // 로그인 폼에 히든클래스 추가하여 화면에 보이지 않도록함.
//     loginForm.classList.add(HIDDEN_CLASS);
//     // 인수에 유저아이디를 넣고 함수에 전달
//     paintGreetings(username);
// }

// // 유저아이디를 확인하고 화면에 띄우는 함수 html조작
// function paintGreetings(username){
//     greeting.innerText = `Hello~ ${username}`;
//     greeting.classList.remove(HIDDEN_CLASS);
// }
// // 브라우저 저장소에서 userId를 받아, 변수에 저장
// const savedUsername = localStorage.getItem(USERNAME_KEY);

// // if there is no data
// if(savedUsername === null){
//     // show the form
//     loginForm.classList.remove(HIDDEN_CLASS);
//     loginForm.addEventListener("submit",onLoginSubmit);
    
// }else{
//     // show the greetings
//     paintGreetings(savedUsername);
// }