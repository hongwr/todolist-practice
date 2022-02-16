// const loginForm = document.getElementById("login-form")  = 같음. 뒤에 # or . 붙이는 것 주의
// const loginForm = document.querySelector("#login-form")
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

function onLoginSubmit(event){
    event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것.
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    localStorage.setItem("username", username)
    paintGreetings(username)
    // console.log(username)
}

function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove("hidden")    

}

// if(localStorage.length !== 0){
//     loginForm.classList.add("hidden")
// } else {
//     loginForm.classList.remove("hidden")
// }

const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onLoginSubmit) // click이 아니고 submit을 쓴다.
} else {
    paintGreetings(savedUsername)
}

// loginForm.addEventListener("submit", onLoginSubmit) // click이 아니고 submit을 쓴다.
 