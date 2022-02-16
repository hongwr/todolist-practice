const ApiKey = "bee7f4496bba70c24251682ac99c95c3"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric` 확인할 때는 풀기
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`
    }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // 위치를 나타내는 함수


// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 현재 내가 위치한 곳의 날씨를 나타냄. JSON 형식으로 오는 것 같음. 객체형태임.  {}안에 있는 것을 바꿔주면 됨. 