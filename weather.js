const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "7db38e739ce7835cad61d409ccddee26";
let searchBox = document.getElementById("search");
let searchbtn = document.getElementById("btn");
let weathericon = document.getElementById("icons");

async function weathercheck() {
    let city = searchBox.value;
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c"; 

    const weatherMain = data.weather[0].main;

    // Use lowercase file names in the 'photos' folder
    if (weatherMain === "Mist") {
        weathericon.src = "./photos/mist.png";
    } else if (weatherMain === "Clear") {
        weathericon.src = "./photos/clear.png";
    } else if (weatherMain === "Rain") {
        weathericon.src = "./photos/rain.png";
    } else if (weatherMain === "Clouds") {
        weathericon.src = "./photos/clouds.png";
    } else if (weatherMain === "Drizzle") {
        weathericon.src = "./photos/drizzle.png";
    } else if (weatherMain === "Snow") {
        weathericon.src = "./photos/snow.png";
    } else {
        // default icon if weather is unrecognized
        weathericon.src = "./photos/default.png";
    }
}

searchbtn.addEventListener("click", weathercheck);
