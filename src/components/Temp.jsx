import React from 'react'
import { useSelector } from 'react-redux';

export default function Temp({list}) {

  const weatherx = useSelector((store) => store.data);
  const weatherData = weatherx.data[0];
  
  return (
    <>
          <div id="box1" className=" w-full  bg-light-b  p-4 text-white flex">

    <div className="w-[100%]">
          <div className="text-4xl font-bold bg-light-b">{weatherData.city.name}</div>
          <div className="pt-2 text-white-g bg-light-b">
            Max: {Math.round(list.main.temp_max - 273)}° || Min:
            {Math.round(list.main.temp_min - 273)}°
          </div>
          <div className="text-8xl pt-4 font-bold bg-light-b text-[#0095ff]">
            {Math.round(list.main.temp - 273)}°
          </div>
        </div>

        <div className="w-[44%] bg-light-b">
          <img
            src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@4x.png`}
            className="w-[100%]  bg-light-b h-[100%]"
            alt=""
          />
        </div></div></>
  )
}
