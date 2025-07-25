import { createContext, useContext, useState, type ReactNode } from "react";
import type { WeatherData } from "../types/weather";
interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: (data: WeatherData | null) => void;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, error, setError, loading, setLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within WeatherProvider");
  }
  return context;
};
