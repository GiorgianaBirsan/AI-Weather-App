import './OutputCard.css'

export default function Outputcard({locationPrompt,temperature,weatherDescription,loading}:{
     locationPrompt:string,
     temperature:string,
     weatherDescription:string, 
     loading:any
    }){

    if (loading) {
        return <p>Loading...</p>;
    }

    return <>
    <div className="weather-data">
        <div className="weather-location">
           <span className="location">{locationPrompt}</span>
        </div>
        <hr className='break-line'/>
        <div className="weather-temperature">
           <span className="temperature">{temperature}</span>
        </div>
    
       <div className="weather-description">
         <span className="description">{weatherDescription}</span>
        </div>
        </div>
    </>
    
}