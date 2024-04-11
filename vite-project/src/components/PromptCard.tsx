import { useState } from 'react';
import './PromptCard.css';
import PromptToLocation from '../utils/PromptToLocation';
import LocationToCoordinates from '../utils/LocationToCoordinates';
import WeatherData from '../utils/WeatherData';
import WeatherAIDescription from './WeatherAIDescription';


/**  this pass props state to sibling component in App.tsx: 
 * 
 * loadingData, location, weatherDescription 
 * 
 */


const promptCard ={
    title: "Find the actual weather on the globe",
    description:"This weather card provides users with essential information about the current and upcoming weather conditions, along with helpful tips to stay safe and prepared for any weather-related events."
  }

  

export default function PromptCard({location,weatherDescription,humidity,temp,tempFeels,tempMax,tempMin,icon,wind,loadingData,}:any){

    const [prompt, setPrompt]= useState("");

    async function fetchData(prompt:any) {
        loadingData(true);
        try {
          const locationResult = await PromptToLocation(prompt);

        //this pass props state to sibling component
          location(locationResult); 
      
          const coordinatesResult = await LocationToCoordinates(locationResult);
          const weatherDataRes = await WeatherData(coordinatesResult);
          const descriptionAI= await WeatherAIDescription(prompt,weatherDataRes)
                    
         //this pass props state to sibling component
         if(weatherDataRes?.length){
             weatherDescription(descriptionAI);
             humidity(weatherDataRes[0].humidity)
             temp(weatherDataRes[0].temperature)
             tempFeels(weatherDataRes[0].temperatureFeels)
             tempMax(weatherDataRes[0].temperatureMax)
             tempMin(weatherDataRes[0].temperatureMin)
             icon(weatherDataRes[0].icon)
             wind(weatherDataRes[0].wind)
         }
        } catch (error) {
        
          console.error('Error fetching data:', error);
        } finally{
            //this pass props state to sibling component
            loadingData(false);
        }
      }

   
   function handleSubmit(e:any){
    e.preventDefault();
    fetchData(prompt);  
   }

    return <>
        <h1 className='prompt-card-title'>{promptCard.title}</h1>
        <p>{promptCard.description}</p>
        <input className="textArea" role="textbox"  name='prompt' onChange={e=> setPrompt(e.target.value)}  />
        <button type='submit' onClick={handleSubmit}>Get Weather</button>
        <p>Ex: What is the current weather in Suceava?</p>
    </>
}