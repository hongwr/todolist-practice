const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000)



// setInterval(sayHello, 5000); //5초마다 계속.

// setTimeout(sayHello, 5000); //5초 뒤에 한 번.