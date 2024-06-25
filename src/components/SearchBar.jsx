import { useDispatch } from "react-redux";
import { currCityAction } from "../store/currCitySlice";
import React, { useState } from "react";
import { dataAction } from "../store/dataSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [fetchLocation, setFetchLocation] = useState(false);

  //Updates city when form submited
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(currCityAction.setCurrCity(e.target[0].value));
    dispatch(dataAction.getCity(e.target[0].value));

    // console.log(e.target[0].value);
    e.target[0].value = "";
  };

  // This function converts lat and long to city via API
  const getUserCurrentAddress = (lat, long) => {
    console.log(lat);
    // Not hiding this API as this one is free and I expecting too much trafic on it
    let API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${long}&key=0bcd6ebcce2c4109a54ae71c211272cd`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((item) => {
        dispatch(currCityAction.setCurrCity(item.results[0].components.city));
        dispatch(dataAction.getCity(item.results[0].components.city));
      });
  };

  // This function is to add get location via google
  const handleButtonClick = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition to get cords
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          getUserCurrentAddress(lat, long);
          setFetchLocation(true);
        },
        () => {
          setFetchLocation(false);
        }
      );
    }
  };

  return (
    <div className="w-[100%] flex  ">
      <form
        id="serach"
        className={`${
          fetchLocation ? "w-[98%]" : "w-[80%]"
        } h-[3rem] bg-light-b m-1 rounded-lg text-white`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="h-full w-[100%] bg-light-b  rounded-lg p-2"
          placeholder="Search Cities"
        />
      </form>
      <button
        className={`w-[18%] h-[3rem] bg-[#0095ff] m-1 rounded-lg text-white font-[500] ${
          fetchLocation && "hidden"
        } hover:bg-dark-b hover:border-2 hover:border-white-g transition duration-400 ease-in-out`}
        onClick={(e) => handleButtonClick(e)}
      >
        Use Current Location
      </button>
    </div>
  );
}
