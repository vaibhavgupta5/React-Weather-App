import { CiTempHigh } from "react-icons/ci";
import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

const AirCondition = ({ list }) => {
  return (
    <>
      <div className="grid grid-cols-3 pt-4 bg-light-b ">
        <div>
          <div className="flex items-center bg-light-b text-white-g text-lg">
            <CiTempHigh className="text-2xl bg-light-b" />
            <p className="bg-light-b font-semibold">Feels Like</p>
          </div>
          <p className="bg-light-b font-bold text-[#bfc5ce] text-4xl pl-6 pt-2">
            {Math.round(list.main.feels_like - 273)}°
          </p>
        </div>

        <div>
          <div className="flex items-center bg-light-b text-white-g text-lg">
            <TbWind className="text-2xl bg-light-b" />
            <p className="bg-light-b font-semibold">Wind Speed</p>
          </div>
          <p className="bg-light-b font-bold text-[#bfc5ce] text-4xl pl-6 pt-2">
            {Math.round(list.wind.speed)}km/hr
          </p>
        </div>

        <div>
          <div className="flex items-start bg-light-b text-white-g text-lg">
            <WiHumidity className="text-2xl bg-light-b" />
            <p className="bg-light-b font-semibold ">Humidity</p>
          </div>
          <p className="bg-light-b font-bold text-[#bfc5ce] text-4xl pl-6 pt-2">
            {Math.round(list.main.humidity)}%
          </p>
        </div>
      </div>
    </>
  );
};

export default AirCondition;
