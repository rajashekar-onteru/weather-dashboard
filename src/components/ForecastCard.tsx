// src/components/ForecastCard.tsx
import React, { useMemo } from "react";

import "./ForecastCard.css";
import type { ForecastItem } from "../types/weather";

interface ForecastCardProps {
  forecast: ForecastItem[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const dailyForecast = useMemo(() => {
    //object/record with key as string and value as an array
    //group forecast items by date
    const grouped: Record<string, ForecastItem[]> = {};

    forecast.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(item);
    });

    return Object.keys(grouped)
      .slice(0, 5)
      .map((date) => {
        const items = grouped[date];
        const middle =
          items.find((i) => i.dt_txt.includes("12:00")) ||
          items[Math.floor(items.length / 2)];
        const min = Math.min(...items.map((i) => i.main.temp_min));
        const max = Math.max(...items.map((i) => i.main.temp_max));

        return {
          date,
          icon: `https://openweathermap.org/img/wn/${middle.weather[0].icon}@2x.png`,
          description: middle.weather[0].description,
          min: Math.round(min),
          max: Math.round(max),
        };
      });
  }, [forecast]);

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecast.map((day) => (
          <div className="forecast-card" key={day.date}>
            <h4>
              {new Date(day.date).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </h4>
            <img src={day.icon} alt={day.description} />
            <p>Min: {day.min}°C</p>
            <p>Max: {day.max}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
