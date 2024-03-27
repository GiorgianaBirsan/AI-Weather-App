const WeatherData = async ({lat,lon} :{lat:any, lon:any}) =>{
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OWM}&units=metric`)     
       const data = await response.json()
       console.log("data", data) ;
       
       const currentWeather = data.weather[0].description
    console.log("currentWeather", currentWeather) ;
    return currentWeather;
       
    }catch (error) {
        console.error(error);
    }
}

export default WeatherData;