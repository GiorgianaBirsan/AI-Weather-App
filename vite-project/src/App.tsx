
import { useState } from 'react'
import './App.css'
import WeatherCard from './UI/WeatherCard';
import Outputcard from './components/OutputCard';
import PromptCard from './components/PromptCard';

function App() {

  const [locationPrompt,setLocationPrompt] =useState("");
  const [weatherDescription,setWeatherDescription] =useState("");
  const [humidity,setHumidity] =useState("");
  const [temp,setTemp] =useState("");
  const [tempFeels,setTempFeels] =useState("");
  const [tempMax,setTempMax] =useState("");
  const [tempMin,setTempMin] =useState("");
  const [icon,setIcon] =useState("");
  const [wind,setWind] =useState("");
  const [loadingData, setLoadingData] = useState(false);


  return (
    <div className='main-app'>  

     <WeatherCard 
         children={
                  <PromptCard
                       location ={setLocationPrompt}  
                       weatherDescription={setWeatherDescription} 
                       humidity={setHumidity}
                       temp={setTemp}
                       tempFeels ={setTempFeels}
                       tempMax={setTempMax}
                       tempMin={setTempMin}
                       icon={setIcon}
                       wind={setWind}
                       loadingData={setLoadingData}

                  />}
      />
     <WeatherCard 
          children={ 
                <Outputcard
                       locationPrompt={locationPrompt} 
                       weatherDescription={weatherDescription}
                       loading={loadingData}
                       icon={icon}
                       humidity ={humidity}
                       temp={temp}
                       tempFeels ={tempFeels}
                       tempMax={tempMax}
                       tempMin={tempMin}
                       wind={wind}     
                />}
      />

    </div>
  )
}

export default App
