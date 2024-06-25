const HourlyWeatherToday = ({ weatherInfo, date }) => {
  const weatherData = weatherInfo.data[0];
  const list = weatherData.list;

  return (
    <>
      <div className="flex bg-light-b text-white-g font-semibold overflow-y-scroll">
        {list.map(
          // map based on condition refering
          (item, index) =>
            item.dt_txt.split(" ")[0] === date[0] &&
            index <= 4 && (
              <div
                key={item.dt}
                className={`bg-dark-b p-1 m-1 pr-8 pl-8 rounded-lg pt-2 pb-3 border-light-b-hover  group hover:bg-[#364a66] cursor-pointer hover:rounded-lg hover:border-r-0 transition duration-400 ease-in-out`}
              >
                <div className="bg-dark-b text-center group-hover:bg-[#364a66] text-sm transition duration-400 ease-in-out">
                  {item.dt_txt.split(" ")[1].split(":")[0]}:
                  {item.dt_txt.split(" ")[1].split(":")[1]}
                </div>

                <div className="bg-dark-b group-hover:bg-[#364a66] transition duration-400 ease-in-out">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="w-[5rem] h-[5rem] transition duration-400 ease-in-out bg-dark-b group-hover:bg-light-b-hover"
                    alt=""
                  />
                </div>

                <div className="bg-dark-b text-center group-hover:bg-[#364a66] transition duration-400 ease-in-out text-[#bfc5ce] text-xl font-bold">
                  {Math.round(item.main.temp - 273)}°
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default HourlyWeatherToday;
