import React from 'react'
import './Print.css';

export default function Print(props) {
  
    let Wdata=props.getWeatherData
   console.log(Wdata)
    let tem=Math.round(Wdata.main.temp)-273;
  
    let clouds=Wdata.weather[0].description;
    let weather=Wdata.weather;
   let icon=`https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
   
  return (
    <div className='main'>
        <h2>{clouds}</h2>
       <img src={icon}></img>
       <p>Temp : {tem}°</p>
       <p>{Wdata.name},{Wdata.sys.country}</p>
       
    </div>

  )
}
