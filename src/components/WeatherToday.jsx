import { useDispatch, useSelector } from "react-redux";
import AirCondition from "./AirCondition";
import HourlyWeatherToday from "./HourlyWeatherToday";
import { expandAction } from "../store/expandSlice";
import ExtendedAirConditions from "./ExtendedAirConditions";

export default function WeatherToday({ weatherInfo }) {

  const weatherx = useSelector((store) => store.data);
  const weatherData = weatherx.data[0];
  const icon = weatherData.list[0].weather[0].icon;
  const list = weatherData.list[0];

  // <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
  const dispatch = useDispatch();
  const expand = useSelector((store) => store.expand);
  

  return (
    <div className="main w-full h-full">
      <div id="box1" className=" w-full h-[40%] bg-dark-b  p-4 text-white flex">
        <div className="w-[70%]">
          <div className="text-4xl font-bold">{weatherData.city.name}</div>
          <div className="mt-2 text-white-g">
            Max: {Math.round(list.main.temp_max - 273)}° || Min:{" "}
            {Math.round(list.main.temp_min - 273)}°
          </div>
          <div className="text-8xl mt-4 font-bold text-[#0095ff]">
            {Math.round(list.main.temp - 273)}°
          </div>
        </div>

        <div className="w-[30%]">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            className="w-[12rem] h-[12rem]"
            alt=""
          />
        </div>
      </div>

      {!expand.expanding ? (
        <>
          <div
            id="box2"
            className=" p-4 bg-light-b w-full h-[28vh] rounded-lg mt-2 flex flex-col justify-center"
          >
            <p className="bg-light-b text-white-g font-bold pb-2 text-sm">
              TODAY'S FORECAST
            </p>
            <HourlyWeatherToday
              weatherInfo={weatherInfo}
              date={list.dt_txt.split(" ")}
            />
          </div>

          <div
            id="box3"
            className=" p-4 bg-light-b w-full h-[23vh] rounded-lg mt-2 flex flex-col "
          >
            <div className="flex justify-between bg-light-b">
              <p className="bg-light-b text-white-g font-bold pb-2 text-sm">
                AIR CONDITION
              </p>
              <button
                className="bg-[#0095ff] p-1 pl-2 pr-2 rounded-md text-white text-sm transition duration-400 ease-in-out hover:bg-dark-b hover:border-[1px] hover:border-white-g"
                onClick={() => dispatch(expandAction.expand())}
              >
                See More
              </button>
            </div>
            <AirCondition list={list} />
          </div>
        </>
      ) : (
        <ExtendedAirConditions list={list} />
      )}
    </div>
  );
}
