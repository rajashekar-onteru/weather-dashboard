import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const fetchWeatherByCity = async (city: string) => {
  const res = await axios.get(
    `${
      import.meta.env.VITE_WEATHER_API_URL
    }?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};

export const fetchForecastByCity = async (city: string) => {
  const res = await axios.get(
    `${
      import.meta.env.VITE_WEATHER_API_FORECAST_URL
    }?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};
