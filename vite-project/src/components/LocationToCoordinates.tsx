
const LocationToCoordinates = async(locationString:string)=>{
    try {
        
     const response = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${locationString}&limit=1&APPID=${import.meta.env.VITE_OWM}`)
     const locationData = await response.json()
    return locationData;
    } catch (err) {
        console.error("Error:", err);
        return await Promise.reject(err);
    }
}

export default LocationToCoordinates;