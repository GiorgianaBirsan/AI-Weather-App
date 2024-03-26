import './OutputCard.scss'

export default function Outputcard({location,temperature,description}:{location:string, temperature:string, description:string}){
    return <>
    <div className="weather-data">
        <div className="weather-location">
           <span className="location">{location}</span>
        </div>
        <hr className='break-line'/>
        <div className="weather-temperature">
           <span className="temperature">{temperature}</span>
        </div>
    
       <div className="weather-description">
         <span className="description">{description}</span>
        </div>
        </div>
    </>
    
}