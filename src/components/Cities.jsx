import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import WeatherWeekly from "./WeatherWeekly";
import { citiesAction } from "../store/citiesSlice";
import { useState } from "react";
import { currCityAction } from "../store/currCitySlice";
export default function Cities() {
  const weatherInfo = useSelector((store) => store.data);
  const dispatch = useDispatch();

  // Unsplash API to fetch images of city added in cities page
  const fetchCitiesImages = async (city) => {
    let API_URL = `https://api.unsplash.com/search/photos?query=${city}+historical&per_page=1&client_id=uvazRXSOmHAzUO_vgCliFfb657AtUExgvRIbXCFfiV8`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((item) => {
        let thumb = item.results[0].urls;
        dispatch(citiesAction.addCities({ thumb, city }));
        return item.results[0].urls.thumb;
      });
  };

  const cities = useSelector((store) => store.cities);

  const handleFetchImg = async (city) => {
    fetchCitiesImages(city);
  };

  // This function makes api fetch on button click or form submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Capatalizing first char of city entered by user
    let city_name = e.target[0].value.toLowerCase();
    let final_city_name =
      city_name.charAt(0).toUpperCase() + city_name.substring(1);
    handleFetchImg(final_city_name);
    e.target[0].value = "";
  };

  const [isCity, setIsCity] = useState("Lucknow");


  // Dispaching the selected city to dataSlice
  const handleClick = (city) => {
    setIsCity(city);
    dispatch(currCityAction.setCurrCity(city));
  };

  return (
    <>
      <div className="main h-[92vh] w-[100%] ">
        <SearchBar />

        <div className="flex overflow-y-scroll no-scrollbar ">
          <div id="left" className="w-[60%] ">
            <div id="bottom" className="h-[78vh] mt-4">
              {cities.cities.map((city, index) => (
                <div
                  key={city}
                  className={`h-[12vh] ${
                    isCity === city ? "bg-light-b-hover" : "bg-light-b"
                  } mt-2 m-1 rounded-lg flex items-center p-4 justify-between cursor-pointer group  hover:bg-light-b-hover`}
                  onClick={() => handleClick(city)}
                >
                  <p
                    className={`${
                      isCity === city ? "bg-light-b-hover" : "bg-light-b"
                    } text-white text-2xl group-hover:bg-light-b-hover`}
                  >
                    {city}
                  </p>
                  <img
                    className="w-[50px] h-[50px] rounded-[100px]"
                    src={cities.cities_images[index]}
                    onClick={() => handleFetchImg(city)}
                    alt=""
                  />
                </div>
              ))}

              <form
                className="h-[12vh] border-[1px] border-solid border-white-g mt-2 m-1 rounded-lg flex items-center p-4 justify-between "
                onSubmit={(e) => handleOnSubmit(e)}
              >
                <p className=" text-white text-2xl">Add Cities</p>
                <div className="w-[75%] h-[90%] flex justify-end">
                  <input
                    type="text"
                    className="bg-light-b h-[100%] w-[75%] rounded-lg pl-3 text-white"
                    placeholder="Add here..."
                  />
                  <button className="h-[100%] w-[20%] bg-[#0095ff] rounded-lg  ml-3 text-white hover:scale-105">
                    Add
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
          <div id="right" className="w-[40%] h-[83vh] rounded-lg">
            <WeatherWeekly className="relative" weatherInfo={weatherInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
