// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import Forecast from './Forecast';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [bgImage, setBgImage] = useState('');

    const API_KEY = '5d731f202c5789b8513748a85d1bc730';


    const getWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
            updateBackground(response.data.weather[0].main);
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    };

    const updateBackground = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clear':
                setBgImage('/clear.jpg');
                break;
            case 'clouds':
                setBgImage('/cloudy.jpg');
                break;
            case 'rain':
                setBgImage('/rainy.jpg');
                break;
            case 'snow':
                setBgImage('/snowy.jpg');
                break;
            default:
                setBgImage('/default.jpg');
                break;
        }
    };

    return (
        <WeatherContainer bgImage={bgImage}>
            <Title>Weather Forecast</Title>
            <SearchBar city={city} setCity={setCity} getWeather={getWeather} />
            {weather && (
                <>
                    <WeatherDetails weather={weather} />
                    <Forecast city={city} />
                </>
            )}
        </WeatherContainer>
    );
};

export default Weather;
