
import { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard';
import Outputcard from './components/OutputCard';
import PromptCard from './components/PromptCard';

const inputWeatherCrad ={
  title: "Find the actual weather on the globe",
  description:"This weather card provides users with essential information about the current and upcoming weather conditions, along with helpful tips to stay safe and prepared for any weather-related events."
}


function App() {

  const [promp, setPrompt] = useState("");
  const [weatherDataLoading, setWeatherDataLoading] =  useState(false);
  const [errorMsg, setErrorMsg] =  useState("");

  return (
    <div className='main-app'>  
     <WeatherCard children={<PromptCard title={inputWeatherCrad.title} description={inputWeatherCrad.description }/>}/>
     <WeatherCard children={ <Outputcard/>}/>
    </div>
  )
}

export default App
