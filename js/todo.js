const toDoForm = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")
// const toDoInput = document.querySelector("#todo-form input")
// const toDoInput = toDoForm.querySelector("input:first-Child")
const toDoInput = toDoForm.querySelector("input")
let toDos = [];

// console.log(toDoInput)

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
    // console.log(localStorage)
}


function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(typeof(li.id))
    toDos = toDos.filter((el) => el.id !== Number(li.id)) //type 확인이 핵심이었다.
    li.remove() //해당 요소가 속한 트리에서 요소를 제거합니다.
    saveToDos()
}
// 1644936834902
//li.id랑 
//X버튼.
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id // 희한하다.. 이게 그냥 되네..
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);    
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push({text: newTodo, id: Date.now()})
    paintToDo({text: newTodo, id: Date.now()});
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item){
//     console.log("hello", item)
// }


const savedToDos = localStorage.getItem("todos")
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}


//삭제를 누르면 기존에 들어가있는 것에서 지워져야함. 즉 

