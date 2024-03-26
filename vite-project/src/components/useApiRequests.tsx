import { useState, useEffect } from "react";
import LocationToCoordinates from "./LocationToCoordinates";

export default function useApiRequest(prompt:any){
    
    const [error, setError] = useState(null);
    const [locationData, setLocationData] = useState([]);
    const [weatherData, setWeatherData] = useState({});

    useEffect(()=>{
       
        const fetchData= async()=>{
            try {
                const locationDataRes = await LocationToCoordinates(prompt)
                setLocationData(locationDataRes);

            } catch (error) {
                console.error(error)
            }
        }


    },[prompt]);

}