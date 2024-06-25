import { createSlice } from "@reduxjs/toolkit";

// Demo Data form APiI
export var iData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1719241200,
      main: {
        temp: 306.71,
        feels_like: 313.71,
        temp_min: 306.71,
        temp_max: 311.86,
        pressure: 995,
        sea_level: 995,
        grnd_level: 981,
        humidity: 63,
        temp_kf: -5.15,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 2.92,
        deg: 192,
        gust: 4.71,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-24 15:00:00",
    },
    {
      dt: 1719252000,
      main: {
        temp: 307.99,
        feels_like: 313.84,
        temp_min: 307.99,
        temp_max: 309.92,
        pressure: 995,
        sea_level: 995,
        grnd_level: 982,
        humidity: 51,
        temp_kf: -1.93,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 2.06,
        deg: 202,
        gust: 3.21,
      },
      visibility: 10000,
      pop: 0.35,
      rain: {
        "3h": 0.2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-24 18:00:00",
    },
    {
      dt: 1719262800,
      main: {
        temp: 308.59,
        feels_like: 311.52,
        temp_min: 308.59,
        temp_max: 308.59,
        pressure: 994,
        sea_level: 994,
        grnd_level: 980,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.09,
        deg: 201,
        gust: 1.54,
      },
      visibility: 10000,
      pop: 0.44,
      rain: {
        "3h": 0.6,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-24 21:00:00",
    },
    {
      dt: 1719273600,
      main: {
        temp: 307.48,
        feels_like: 310.61,
        temp_min: 307.48,
        temp_max: 307.48,
        pressure: 995,
        sea_level: 995,
        grnd_level: 981,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.21,
        deg: 239,
        gust: 2.32,
      },
      visibility: 10000,
      pop: 0.53,
      rain: {
        "3h": 0.48,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-25 00:00:00",
    },
    {
      dt: 1719284400,
      main: {
        temp: 311.39,
        feels_like: 315.34,
        temp_min: 311.39,
        temp_max: 311.39,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.63,
        deg: 217,
        gust: 2.64,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        "3h": 0.79,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-25 03:00:00",
    },
    {
      dt: 1719295200,
      main: {
        temp: 315.42,
        feels_like: 319.83,
        temp_min: 315.42,
        temp_max: 315.42,
        pressure: 995,
        sea_level: 995,
        grnd_level: 982,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 1.02,
        deg: 196,
        gust: 2.12,
      },
      visibility: 10000,
      pop: 0.45,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-25 06:00:00",
    },
    {
      dt: 1719306000,
      main: {
        temp: 314.39,
        feels_like: 318.78,
        temp_min: 314.39,
        temp_max: 314.39,
        pressure: 993,
        sea_level: 993,
        grnd_level: 980,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 5.06,
        deg: 216,
        gust: 4.05,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        "3h": 0.56,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-25 09:00:00",
    },
    {
      dt: 1719316800,
      main: {
        temp: 313.93,
        feels_like: 317.83,
        temp_min: 313.93,
        temp_max: 313.93,
        pressure: 992,
        sea_level: 992,
        grnd_level: 978,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 3.66,
        deg: 234,
        gust: 3.43,
      },
      visibility: 10000,
      pop: 0.59,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-25 12:00:00",
    },
    {
      dt: 1719327600,
      main: {
        temp: 311.9,
        feels_like: 315.54,
        temp_min: 311.9,
        temp_max: 311.9,
        pressure: 993,
        sea_level: 993,
        grnd_level: 979,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 3.52,
        deg: 204,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0.34,
      rain: {
        "3h": 0.19,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-25 15:00:00",
    },
    {
      dt: 1719338400,
      main: {
        temp: 310.31,
        feels_like: 313.91,
        temp_min: 310.31,
        temp_max: 310.31,
        pressure: 994,
        sea_level: 994,
        grnd_level: 981,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 2.69,
        deg: 161,
        gust: 5.64,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-25 18:00:00",
    },
    {
      dt: 1719349200,
      main: {
        temp: 307.54,
        feels_like: 311.71,
        temp_min: 307.54,
        temp_max: 307.54,
        pressure: 994,
        sea_level: 994,
        grnd_level: 980,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 1.76,
        deg: 177,
        gust: 3.52,
      },
      visibility: 10000,
      pop: 0.59,
      rain: {
        "3h": 2.43,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-25 21:00:00",
    },
    {
      dt: 1719360000,
      main: {
        temp: 306.88,
        feels_like: 311.62,
        temp_min: 306.88,
        temp_max: 306.88,
        pressure: 995,
        sea_level: 995,
        grnd_level: 981,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.43,
        deg: 85,
        gust: 3.93,
      },
      visibility: 10000,
      pop: 0.69,
      rain: {
        "3h": 1.23,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-26 00:00:00",
    },
    {
      dt: 1719370800,
      main: {
        temp: 307.83,
        feels_like: 314.24,
        temp_min: 307.83,
        temp_max: 307.83,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 4.39,
        deg: 86,
        gust: 4.06,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        "3h": 0.49,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-26 03:00:00",
    },
    {
      dt: 1719381600,
      main: {
        temp: 309.16,
        feels_like: 315.87,
        temp_min: 309.16,
        temp_max: 309.16,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 5.29,
        deg: 107,
        gust: 4.38,
      },
      visibility: 10000,
      pop: 0.46,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-26 06:00:00",
    },
    {
      dt: 1719392400,
      main: {
        temp: 310.34,
        feels_like: 317.34,
        temp_min: 310.34,
        temp_max: 310.34,
        pressure: 995,
        sea_level: 995,
        grnd_level: 981,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.07,
        deg: 93,
        gust: 4.36,
      },
      visibility: 10000,
      pop: 0.13,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-26 09:00:00",
    },
    {
      dt: 1719403200,
      main: {
        temp: 308.97,
        feels_like: 315.83,
        temp_min: 308.97,
        temp_max: 308.97,
        pressure: 994,
        sea_level: 994,
        grnd_level: 980,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.41,
        deg: 101,
        gust: 6.6,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-26 12:00:00",
    },
    {
      dt: 1719414000,
      main: {
        temp: 305.29,
        feels_like: 311.51,
        temp_min: 305.29,
        temp_max: 305.29,
        pressure: 996,
        sea_level: 996,
        grnd_level: 982,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.89,
        deg: 104,
        gust: 10.36,
      },
      visibility: 10000,
      pop: 0.47,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-26 15:00:00",
    },
    {
      dt: 1719424800,
      main: {
        temp: 304.16,
        feels_like: 310.18,
        temp_min: 304.16,
        temp_max: 304.16,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.98,
        deg: 110,
        gust: 11.68,
      },
      visibility: 10000,
      pop: 0.51,
      rain: {
        "3h": 0.47,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-26 18:00:00",
    },
    {
      dt: 1719435600,
      main: {
        temp: 302.3,
        feels_like: 307.65,
        temp_min: 302.3,
        temp_max: 302.3,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 7,
        deg: 103,
        gust: 11.5,
      },
      visibility: 10000,
      pop: 0.9,
      rain: {
        "3h": 2.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-26 21:00:00",
    },
    {
      dt: 1719446400,
      main: {
        temp: 301.49,
        feels_like: 306.29,
        temp_min: 301.49,
        temp_max: 301.49,
        pressure: 998,
        sea_level: 998,
        grnd_level: 984,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 6.6,
        deg: 99,
        gust: 10.59,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 5.04,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-27 00:00:00",
    },
    {
      dt: 1719457200,
      main: {
        temp: 302.26,
        feels_like: 307.76,
        temp_min: 302.26,
        temp_max: 302.26,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 985,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.57,
        deg: 112,
        gust: 8.09,
      },
      visibility: 10000,
      pop: 0.94,
      rain: {
        "3h": 1.62,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-27 03:00:00",
    },
    {
      dt: 1719468000,
      main: {
        temp: 306.8,
        feels_like: 313.8,
        temp_min: 306.8,
        temp_max: 306.8,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 6.29,
        deg: 114,
        gust: 6.62,
      },
      visibility: 10000,
      pop: 0.74,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-27 06:00:00",
    },
    {
      dt: 1719478800,
      main: {
        temp: 307.04,
        feels_like: 313.82,
        temp_min: 307.04,
        temp_max: 307.04,
        pressure: 998,
        sea_level: 998,
        grnd_level: 984,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 7.17,
        deg: 108,
        gust: 7.3,
      },
      visibility: 10000,
      pop: 0.59,
      rain: {
        "3h": 0.94,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-27 09:00:00",
    },
    {
      dt: 1719489600,
      main: {
        temp: 306.14,
        feels_like: 312.29,
        temp_min: 306.14,
        temp_max: 306.14,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 6.17,
        deg: 103,
        gust: 6.08,
      },
      visibility: 10000,
      pop: 0.44,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-27 12:00:00",
    },
    {
      dt: 1719500400,
      main: {
        temp: 303.04,
        feels_like: 308.16,
        temp_min: 303.04,
        temp_max: 303.04,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 4.87,
        deg: 100,
        gust: 6.76,
      },
      visibility: 10000,
      pop: 0.42,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-27 15:00:00",
    },
    {
      dt: 1719511200,
      main: {
        temp: 302.73,
        feels_like: 307.86,
        temp_min: 302.73,
        temp_max: 302.73,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 985,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 3.74,
        deg: 124,
        gust: 5.15,
      },
      visibility: 10000,
      pop: 0.51,
      rain: {
        "3h": 0.54,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-27 18:00:00",
    },
    {
      dt: 1719522000,
      main: {
        temp: 302.12,
        feels_like: 306.77,
        temp_min: 302.12,
        temp_max: 302.12,
        pressure: 998,
        sea_level: 998,
        grnd_level: 984,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 2.31,
        deg: 115,
        gust: 4.38,
      },
      visibility: 10000,
      pop: 0.4,
      rain: {
        "3h": 0.27,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-27 21:00:00",
    },
    {
      dt: 1719532800,
      main: {
        temp: 302.44,
        feels_like: 307.14,
        temp_min: 302.44,
        temp_max: 302.44,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 1.88,
        deg: 104,
        gust: 4.2,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-28 00:00:00",
    },
    {
      dt: 1719543600,
      main: {
        temp: 304.77,
        feels_like: 309.64,
        temp_min: 304.77,
        temp_max: 304.77,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 3.02,
        deg: 87,
        gust: 3.37,
      },
      visibility: 10000,
      pop: 0.14,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-28 03:00:00",
    },
    {
      dt: 1719554400,
      main: {
        temp: 307.46,
        feels_like: 313.33,
        temp_min: 307.46,
        temp_max: 307.46,
        pressure: 998,
        sea_level: 998,
        grnd_level: 984,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 3.15,
        deg: 87,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-28 06:00:00",
    },
    {
      dt: 1719565200,
      main: {
        temp: 309.84,
        feels_like: 315.76,
        temp_min: 309.84,
        temp_max: 309.84,
        pressure: 996,
        sea_level: 996,
        grnd_level: 982,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 2.86,
        deg: 119,
        gust: 2.16,
      },
      visibility: 10000,
      pop: 0.84,
      rain: {
        "3h": 0.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-28 09:00:00",
    },
    {
      dt: 1719576000,
      main: {
        temp: 308.49,
        feels_like: 314.24,
        temp_min: 308.49,
        temp_max: 308.49,
        pressure: 995,
        sea_level: 995,
        grnd_level: 982,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 1.38,
        deg: 123,
        gust: 1.97,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-28 12:00:00",
    },
    {
      dt: 1719586800,
      main: {
        temp: 306.77,
        feels_like: 312.77,
        temp_min: 306.77,
        temp_max: 306.77,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 4.62,
        deg: 103,
        gust: 6.33,
      },
      visibility: 10000,
      pop: 0.29,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-28 15:00:00",
    },
    {
      dt: 1719597600,
      main: {
        temp: 304.34,
        feels_like: 310.95,
        temp_min: 304.34,
        temp_max: 304.34,
        pressure: 998,
        sea_level: 998,
        grnd_level: 984,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 6.44,
        deg: 89,
        gust: 9.01,
      },
      visibility: 10000,
      pop: 0.62,
      rain: {
        "3h": 1.36,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-28 18:00:00",
    },
    {
      dt: 1719608400,
      main: {
        temp: 301.72,
        feels_like: 307.3,
        temp_min: 301.72,
        temp_max: 301.72,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 6.31,
        deg: 91,
        gust: 9.59,
      },
      visibility: 10000,
      pop: 0.98,
      rain: {
        "3h": 3.15,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-28 21:00:00",
    },
    {
      dt: 1719619200,
      main: {
        temp: 302.45,
        feels_like: 307.82,
        temp_min: 302.45,
        temp_max: 302.45,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.77,
        deg: 98,
        gust: 8.12,
      },
      visibility: 3251,
      pop: 0.98,
      rain: {
        "3h": 3.93,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-29 00:00:00",
    },
    {
      dt: 1719630000,
      main: {
        temp: 303.77,
        feels_like: 310.03,
        temp_min: 303.77,
        temp_max: 303.77,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.52,
        deg: 110,
        gust: 7.96,
      },
      visibility: 10000,
      pop: 0.97,
      rain: {
        "3h": 4.03,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-29 03:00:00",
    },
    {
      dt: 1719640800,
      main: {
        temp: 305.97,
        feels_like: 312.92,
        temp_min: 305.97,
        temp_max: 305.97,
        pressure: 999,
        sea_level: 999,
        grnd_level: 985,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 6.75,
        deg: 114,
        gust: 7.08,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.57,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-29 06:00:00",
    },
    {
      dt: 1719651600,
      main: {
        temp: 306.79,
        feels_like: 313.57,
        temp_min: 306.79,
        temp_max: 306.79,
        pressure: 997,
        sea_level: 997,
        grnd_level: 984,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.09,
        deg: 122,
        gust: 6.56,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 4.51,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-29 09:00:00",
    },
    {
      dt: 1719662400,
      main: {
        temp: 305.63,
        feels_like: 311.7,
        temp_min: 305.63,
        temp_max: 305.63,
        pressure: 997,
        sea_level: 997,
        grnd_level: 983,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 5.61,
        deg: 110,
        gust: 6.67,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 4.84,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-29 12:00:00",
    },
  ],
  city: {
    id: 1264733,
    name: "Lucknow",
    coord: {
      lat: 26.85,
      lon: 80.9167,
    },
    country: "IN",
    population: 2472011,
    timezone: 19800,
    sunrise: 1719186235,
    sunset: 1719236011,
  },
};

// Slice to fetch and update data and city

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [iData],
    city: "Lucknow",
    fetch: false,
  },
  reducers: {
    getData(state, action) {
      // Updates Data
      state.data = [action.payload];
    },

    getCity: (state, action) => {
      // Updated city
      state.city = action.payload;
    },
    getFetch: (state, action) => {
      // Updates status
      state.fetch = action.payload;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
