import { ReactNode } from 'react';
import './WeatherCard.css';



export default function WeatherCard({children}:{children: ReactNode}){
    return <>
    <div className='weather-card'>
        {children}  
       </div>
    </>
     
}