const API_KEY="5a5e5dc879b0fbacdaf831fae3d75afa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("you live in", lat , lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child"); 
            const city = document.querySelector("#weather span:last-child");   
            weather.innerText = data.name;  
            const temp = Math.round(data.main.temp-273.15);
            city.innerText = `${data.weather[0].main} / ${temp}'C` ;
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk , () => alert("can't find you"));