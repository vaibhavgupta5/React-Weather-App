// Dashboard to display weather info in graph format

import "chart.js/auto";
import { defaults } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";
import Temp from "./Temp";

export default function Dashboard() {
  const weatherInfo = useSelector((store) => store.data);
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  const list = weatherInfo.data[0].list;
  const newList = list.filter(
    (item) => item.dt_txt.split(" ")[1] === "21:00:00"
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-[100%] p-4 ">
        <div className="h-[40vh] w-[100%] rounded-lg border-solid border-[2px] p-4 flex justify-center items-center bg-light-b border-white   ">
          <Temp list={list[0]} className="bg-light-b" />
        </div>

        {/* Took help from Chart.js Documentation */}
        
        <div className="h-[40vh] w-[100%] rounded-lg border-solid border-[2px]  border-white p-2">
          <Chart
            type="line"
            options={{
              scales: {
                y: {
                  suggestedMin: 10,
                  suggestedMax: 55,
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 12,
                    },
                  },
                },
                x: {
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 14,
                    },

                    suggestedMin: 10,
                    suggestedMax: 55,
                  },
                },
              },

              plugins: {
                legend: {
                  labels: {
                    color: "white",

                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            data={{
              labels: newList.map((item) => item.dt_txt.split(" ")[0]),
              datasets: [
                {
                  label: "Temperature (C)",
                  data: newList.map((item) => Math.round(item.main.temp - 273)),
                  backgroundColor: "white",
                  borderColor: "#0095ff",
                },

                {
                  label: "Feels Like (C)",
                  data: newList.map((item) =>
                    Math.round(item.main.feels_like - 273)
                  ),
                  backgroundColor: "#0095ff",
                  borderColor: "white",
                },
              ],
            }}
          />
        </div>

        <div className="h-[40vh] w-[100%] rounded-lg border-solid border-[2px]  border-white p-2">
          <Chart
            type="line"
            options={{
              scales: {
                y: {
                  suggestedMin: 10,
                  suggestedMax: 55,
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 12,
                    },
                  },
                },
                x: {
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 14,
                    },

                    suggestedMin: 10,
                    suggestedMax: 55,
                  },
                },
              },

              plugins: {
                legend: {
                  labels: {
                    color: "white",

                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            data={{
              labels: newList.map((item) => item.dt_txt.split(" ")[0]),
              datasets: [
                {
                  label: "Humidity (hPa)",
                  data: newList.map((item) => Math.round(item.main.humidity)),
                  backgroundColor: "white",
                  borderColor: "#0095ff",
                },
              ],
            }}
          />
        </div>

        <div className="h-[40vh] w-[100%] rounded-lg border-solid border-[2px]  border-white p-2">
          <Chart
            type="line"
            options={{
              scales: {
                y: {
                  suggestedMin: 10,
                  suggestedMax: 30,
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 12,
                    },
                  },
                },
                x: {
                  ticks: {
                    color: "#8F959E",
                    font: {
                      size: 14,
                    },

                    suggestedMin: 10,
                    suggestedMax: 55,
                  },
                },
              },

              plugins: {
                legend: {
                  labels: {
                    color: "white",

                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            data={{
              labels: newList.map((item) => item.dt_txt.split(" ")[0]),
              datasets: [
                {
                  label: "Wind Speed (Km/hr)",
                  data: newList.map((item) => Math.round(item.wind.speed)),
                  backgroundColor: "#0095ff",
                  borderColor: "white",
                },

                {
                  label: "Visibility (Km)",
                  data: newList.map((item) =>
                    Math.round(item.visibility / 1000 - Math.random() * 4)
                  ),
                  backgroundColor: "white",
                  borderColor: "#0095ff",
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
}
