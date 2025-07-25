import { useState } from "react";
import { fetchForecastByCity, fetchWeatherByCity } from "../api/weather";
import { useWeatherContext } from "../context/WeatherContext";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

function Dashboard() {
  const { weather, setWeather, error, setError, loading } = useWeatherContext();
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city: string) => {
    //if we use async and await these 2 apis execute one after another
    //if we use Promise.allSettled they execute in parallel
    //and we get the result faster
    //if one of the api fails we still get the result of the other api
    const [weatherRes, forecastRes] = await Promise.allSettled([
      fetchWeatherByCity(city),
      fetchForecastByCity(city),
    ]);

    if (weatherRes.status === "fulfilled") {
      setWeather(weatherRes.value);
    } else {
      setWeather(null);
      setError(
        `Weather API error: ${weatherRes.reason?.response?.data?.message}`
      );
    }

    if (forecastRes.status === "fulfilled") {
      setForecast(forecastRes.value.list);
    } else {
      setForecast(null);
      setError(
        `Weather API error: ${forecastRes.reason?.response?.data?.message}`
      );
    }
  };

  return (
    <div>
      <h1 className="app-title">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
      {forecast && <ForecastCard forecast={forecast} />}
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
    </div>
  );
}

export default Dashboard;
