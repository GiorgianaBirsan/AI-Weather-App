
// using Api key from https://openweathermap.org

const LocationToCoordinates = async(locationString:any)=>{
    try {
      const response = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${locationString}&limit=1&APPID=${import.meta.env.VITE_OWM}`)
      const locationData = await response.json()
         const lat=  locationData[0].lat;
         const lon=  locationData[0].lon;
    return {lat,lon}
    } catch (err) {
        return await Promise.reject(err);
    }
}

export default LocationToCoordinates;