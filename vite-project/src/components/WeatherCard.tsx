import { ReactNode } from 'react';
import './WeatherCard.scss';



export default function WeatherCard({children}:{children: ReactNode}){
    return <>
    <div className='weather-card'>
        {children}  
       </div>
    </>
     
}