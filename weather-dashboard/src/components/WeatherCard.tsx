// src/components/WeatherCard.tsx
import React from "react";

import "./WeatherCard.css";
import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const { name, main, wind, weather } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  console.log("WeatherCard data:", data);
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="description">{weather[0].description}</p>

      <div className="temp">Temperature: {main.temp}°C</div>

      <div className="details">
        <p>Wind: {wind.speed} m/s</p>
        <p>Humidity: {main.humidity}%</p>
        <p>
          Min: {main.temp_min}°C | Max: {main.temp_max}°C
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
