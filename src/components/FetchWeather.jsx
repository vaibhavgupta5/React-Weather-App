import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from "../store/dataSlice";
import { fetchAction } from "../store/fetchSlice";

const FetchWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector((store) => store.currCity);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchAction.fetch(true));

    // api to fetch weather data for city entered by user.
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city.city}&appid=d459c205feda3984c7dc5dfe5ce2524f`,
      { signal }
    )
      .then((res) => res.json())
      .then((item) => {
        dispatch(dataAction.getData(item)); // dispaches data to dataSlice
        dispatch(fetchAction.fetch(false));
      });

    return () => {
      controller.abort();
    };
  }, [dispatch, city]); // useEffect hook repaints when dependencies change

  return <></>; // epmty component just added in App.jsx to make it work on window load
};

export default FetchWeather;
