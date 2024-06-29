// src/components/WeatherDetails.js
import React from 'react';
import styled from 'styled-components';

const WeatherInfo = styled.div`
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: left;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const WeatherDetails = ({ weather }) => {
    return (
        <WeatherInfo>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <p>Pressure: {weather.main.pressure} hPa</p>
        </WeatherInfo>
    );
};

export default WeatherDetails;
