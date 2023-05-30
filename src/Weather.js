import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1144e1b9b4e2b6bca6be2682d0927341`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCity('');
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const displayWeatherData = () => {
    if (weatherData) {
      const temperatureInCelsius = weatherData.main.temp - 273.15; // Convert from Kelvin to Celsius

      return (
        <>
          <h2>Weather Information</h2>
          <p>Temperature: {temperatureInCelsius.toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </>
      );
    } else {
      return <p>Loading weather data...</p>;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {displayWeatherData()}
    </div>
  );
};

export default Weather;
