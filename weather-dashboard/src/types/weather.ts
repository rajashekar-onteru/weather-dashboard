export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}

export interface ForecastItem {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
