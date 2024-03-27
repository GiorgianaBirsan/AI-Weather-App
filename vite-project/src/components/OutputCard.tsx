import './OutputCard.css'

export default function Outputcard({locationPrompt,weatherDescription,loading,icon,humidity,temp,tempFeels,tempMax,tempMin,wind}:{
     locationPrompt?:string|undefined,
     weatherDescription?:string, 
     loading?:boolean|any,
     icon?: string,
     humidity?: string,
     temp?:string,
     tempFeels?:string,
     tempMax?:string,
     tempMin?:string,
     wind?:string,
    }){


     const image_url = `https://openweathermap.org/img/wn/${icon}@2x.png`  
     const temperature = Math.floor(Number(temp))
     const temperature_max = Math.floor(Number(tempMax))
     const temperature_min = Math.floor(Number(tempMin))
     const feelslike_temp = Math.floor(Number(tempFeels))
     const windSpeed = Math.floor(Number(wind))

    if (loading) {
        return <p>Loading...</p>;
    }
   
    return <>
     {locationPrompt?.length && (
        <div>
            <div className="weather-data">
                    <div className="weather-location">
                    <span className="location">{locationPrompt}</span>
                    </div>
            
                    <hr className='break-line'/>
                    <div className="weather-temperature">
                        <img src={image_url}/>
                        <span className="temperature">{temperature}°C</span><br/>
                        <span className='feelslike-temp'>Feels like {feelslike_temp}°C</span>
                        <br/>
                        <span className='feelslike-temp'>Humidity: {humidity}%</span>
                    </div>
                    <div className="weather-description">
                        <span className="description">Right now the weather is {weatherDescription}!</span> 
                        <div className='temp-variation'>
                            <span>Max temperature: {temperature_max}°C</span>
                            <span>Min temperature: {temperature_min}°C</span>
                        </div>
                    </div>
                    <div className='wind-speed'><span id='wind-text'>Wind</span>{windSpeed} Km/h</div>
            </div>        
        </div>
        )} 
        
    </>
    
}