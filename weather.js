

const apiKey="6f0519c50e66ac840ce6fa2d365d7f8e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const  card = document.querySelector(".check-weather");




async function checkWeather(cityname) {

    const response = await fetch (apiUrl + cityname +`&appid=${apiKey}`);
    if(response.status == 404)
    {
        error.style.display = "block";
    }
    else{
        card.style.display = "none";
        var data=await response.json();


        // console.log(data);
        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp)  +"°c";  
        humidity.innerHTML = data.main.humidity +"%"; 
        wind.innerHTML = data.wind.speed +"km/h";
    
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "/udyanimg/clouds.png";
        }
        else if(data.weather[0].main === "Clear")
        {
            weatherIcon.src = "/udyanimg/clear.png"; 
        }
        else if(data.weather[0].main === "Rain")
         {
                weatherIcon.src = "/udyanimg/rain.png"; 
            }
        else if(data.weather[0].main === "Drizzle")
        {
            weatherIcon.src = "/udyanimg/drizzle.png"; 
         }
         else if(data.weather[0].main === "Mist")
        {
         weatherIcon.src = "/udyanimg/mist.png"; 
        }
    
        weather.style.display = "block";
        error.style.display = "none";
    }
    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


