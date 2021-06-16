const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const savedUserId = localStorage.getItem("userId");
const greetings = document.querySelector("#greeting");

function onLoinSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    
    localStorage.setItem("userId", userName);
    loginForm.classList.add("hidden");    
}

function savedUser(savedUserId){
    loginForm.classList.add("hidden"); 
    greetings.innerText = `welcome! ${savedUserId}, to my home~!`;
    greetings.classList.remove("hidden");
}

if(savedUserId === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoinSubmit);
}else{
    savedUser(savedUserId);
}