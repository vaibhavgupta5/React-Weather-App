import { useSelector } from "react-redux";
import WeatherToday from "./WeatherToday";
import WeatherWeekly from "./WeatherWeekly";
import SearchBar from "./SearchBar";

export default function MainContainer() {
  const weatherInfo = useSelector((store) => store.data);

  return (
    <>
      <div className="main h-[92vh] w-[100%]">
        <SearchBar />

        <div className="flex">
          <div id="left" className="w-[60%] ">
            <div id="bottom" className="h-[78vh]">
              <WeatherToday weatherInfo={weatherInfo} />
            </div>
          </div>
          <div id="right" className="w-[40%] h-[82vh] rounded-lg">
            <WeatherWeekly weatherInfo={weatherInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
