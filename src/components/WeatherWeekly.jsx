const WeatherWeekly = ({ weatherInfo }) => {




  const weatherData = weatherInfo.data[0];
  const list = weatherData.list;

  
// Fuction to find day on consecutive date
  const handleDay = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    // return days[day-1];

    return dateString === list[0].dt_txt.split(" ")[0] ? "Today" : days[day];
  };

  return (
    <>
      <div className="bg-light-b h-full m-4 rounded-lg p-4 flex flex-col pt-8">
        <p className="bg-light-b text-white-g font-semibold pb-4">
          WEEKLY FORECAST
        </p>
      
        {list.map(
          (item, index) =>
            item.dt_txt.split(" ")[1] === "21:00:00" && (
              <div
                key={index}
                className={`flex items-center justify-between bg-dark-b text-white pr-4 pl-4 font-semibold  pb-4 pt-4 group hover:bg-[#364a66] transition duration-400 ease-in-out cursor-pointer  mt-2 rounded-lg`}
              >
                <div className="text-sm bg-dark-b group-hover:bg-[#364a66] w-[40%] transition duration-400 ease-in-out ">
                  {handleDay(item.dt_txt.split(" ")[0])}
                </div>
                <div className="flex flex-row w-[60%] text-sm font-bold justify-start items-center text-[#bfc5ce] bg-dark-b  group-hover:bg-[#364a66] transition duration-400 ease-in-out">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="w-[4rem] h-[4rem] bg-dark-b group-hover:bg-[#364a66] transition duration-400 ease-in-out"
                    alt=""
                  />
                  <div className="bg-dark-b group-hover:bg-[#364a66] transition duration-400 ease-in-out">
                    {item.weather[0].main}
                  </div>
                </div>
                <div className="bg-dark-b group-hover:bg-[#364a66] transition duration-400 ease-in-out">
                  <strong className="bg-dark-b group-hover:bg-[#364a66] transition duration-400 ease-in-out text-[#0095ff]">
                    {handleDay(item.dt_txt.split(" ")[0]) === "Today" ? (Math.round(list[0].main.temp_max - 273)) :(Math.round(item.main.temp_max - 273))}
                  </strong>
                  /
                  {handleDay(item.dt_txt.split(" ")[0]) === "Today" ? (Math.round(list[0].main.temp_min - 273)):(Math.round(item.main.temp_max - 273) ===
                  Math.round(item.main.temp_min - 273)
                    ? Math.round(item.main.temp_min - 273 - 4)
                    : Math.round(item.main.temp_min - 273))}
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default WeatherWeekly;
