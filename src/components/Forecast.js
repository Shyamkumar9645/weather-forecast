// src/components/Forecast.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ForecastContainer = styled.div`
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: left;
  width: 90%;
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

const ForecastItem = styled.div`
  min-width: 150px;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 10px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const Forecast = ({ city }) => {
    const [forecast, setForecast] = useState(null);

    const API_KEY = '5d731f202c5789b8513748a85d1bc730';


    useEffect(() => {
        const getForecast = async () => {
            if (city) {
                try {
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
                    );
                    setForecast(response.data);
                } catch (error) {
                    console.error('Error fetching the forecast data:', error);
                }
            }
        };

        getForecast();
    }, [city]);

    return (
        <ForecastContainer>
            {forecast &&
                forecast.list.slice(0, 10).map((item, index) => (
                    <ForecastItem key={index}>
                        <h3>{new Date(item.dt_txt).toLocaleDateString()}</h3>
                        <p>{new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <p>{item.weather[0].description}</p>
                        <p>Temperature: {item.main.temp}°C</p>
                        <p>Humidity: {item.main.humidity}%</p>
                    </ForecastItem>
                ))}
        </ForecastContainer>
    );
};

export default Forecast;
