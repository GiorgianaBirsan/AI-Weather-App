
import { useState } from 'react'
import './App.css'
import WeatherCard from './UI/WeatherCard';
import Outputcard from './components/OutputCard';
import PromptCard from './components/PromptCard';



function App() {

  const [locationPrompt,setLocationPrompt] =useState("");
  const [weatherDescription,setWeatherDescription] =useState("");
  const [loadingData, setLoadingData] = useState(false);

  return (
    <div className='main-app'>  

     <WeatherCard 
         children={
                  <PromptCard
                       location ={setLocationPrompt}  
                       weatherDescription={setWeatherDescription} 
                       loadingData={setLoadingData}

                  />}
      />
     <WeatherCard 
          children={ 
                <Outputcard
                       locationPrompt={locationPrompt} 
                       temperature='' 
                       weatherDescription={weatherDescription}
                       loading={loadingData}
                />}
      />

    </div>
  )
}

export default App
