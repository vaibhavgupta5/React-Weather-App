import { FaShower } from "react-icons/fa";
import {
  TbCloudSnow,
  TbEyeBolt,
  TbMeterCube,
  TbSunHigh,
  TbSunrise,
  TbSunset,
  TbWind,
} from "react-icons/tb";

export default function ExtendedAirConditions({ list }) {
  return (
    <div className="grid grid-cols-2 gap-2 h-[55vh] pl-4 pr-4 pb-4 ">
      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbWind className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Wind Speed</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.wind.speed)}km/hr
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbMeterCube className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Pressure</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.main.pressure)}hPa
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <FaShower className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Humidity</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.main.humidity)}%
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbSunHigh className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Feels Like</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.main.feels_like - 273)}°
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbEyeBolt className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Visibility</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.visibility / 1000)}km
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbCloudSnow className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Description</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {list.weather[0].description}
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbSunrise className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Max Temperature</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.main.temp_max - 273) ===
          Math.round(list.main.temp_min - 273)
            ? Math.round(list.main.temp_max - 273 - 4)
            : Math.round(list.main.temp_max - 273)}
          °
        </p>
      </div>

      <div className="bg-light-b flex flex-col justify-center p-1 pl-4 rounded-lg">
        <div className="flex items-center bg-light-b text-white-g text-lg">
          <TbSunset className="text-2xl bg-light-b" />
          <p className="bg-light-b font-semibold pl-2">Min Temperature</p>
        </div>
        <p className="bg-light-b font-bold text-[#bfc5ce] text-3xl pl-8 pt-2">
          {Math.round(list.main.temp_max - 273) ===
          Math.round(list.main.temp_min - 273)
            ? Math.round(list.main.temp_min - 273 - 4)
            : Math.round(list.main.temp_min - 273)}
          °
        </p>
      </div>
    </div>
  );
}
