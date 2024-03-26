import { useState, useEffect } from "react";
import LocationToCoordinates from "./LocationToCoordinates";
import PromptToLocation from "./PromptToLocation";
import WeatherData from "./WeatherData";

const useApiRequest = (prompt:any)=>{
    
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const locationResult = await PromptToLocation(prompt);
        const coordinatesResult = await LocationToCoordinates(locationResult);
        const weatherResult = await WeatherData(coordinatesResult);
        setWeatherData(weatherResult);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prompt]); 

  return { loading, error, weatherData };
};


export default useApiRequest;