// src/components/SearchBar.tsx
import React, { useState } from "react";
import "./SearchBar.css";
import { useWeatherContext } from "../context/WeatherContext";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const { setError } = useWeatherContext();
  const handleSearch = () => {
    if (!input.trim()) {
      setError("Please enter a city");
      return;
    }
    setError("");
    onSearch(input.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
