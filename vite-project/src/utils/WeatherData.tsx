const WeatherData = async ({lat,lon} :{lat:any, lon:any}) =>{
    try {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OWM}&units=metric`) 
       const data = await response.json()
       
       const weatherDescription = data.weather[0].description
       const temperature = data.main.temp
       const temperatureFeels = data.main.feels_like
       const temperatureMax= data.main.temp_max
       const temperatureMin =data.main.temp_min
       const humidity = data.main.humidity
       const icon = data.weather[0].icon
       const windSpeed = data.wind.speed

       const output =[ {
        description: weatherDescription,
        temperature :temperature,
        temperatureFeels:temperatureFeels,
        temperatureMax: temperatureMax,
        temperatureMin:temperatureMin,
        humidity:humidity,
        icon:icon,
        wind:windSpeed
       }]

    return output;
       
    }catch (error) {
        console.error(error);
    }
}

export default WeatherData;