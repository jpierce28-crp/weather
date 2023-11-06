
// api variables
const apiKey = "e59fc793a428f80ace4415ca7c2b14a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

//search variable
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// image variable
const weatherIcon = document.querySelector(".weather-icon")


//function to link to api site
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();

    //console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();  
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
        document.querySelector(".humidity").innerHTML = data.name.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "m/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        if(data.weather[0].main == "wind"){
            weatherIcon.src = "images/wind.png"
        }
        if(data.weather[0].main == "humitidy"){
            weatherIcon.src = "images/humitidy.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})
