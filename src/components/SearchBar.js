// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  margin-right: 10px;
  width: 250px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #1e90ff;
  color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #4682b4;
  }
`;

const SearchBar = ({ city, setCity, getWeather }) => {
    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={getWeather}>Get Weather</Button>
        </SearchContainer>
    );
};

export default SearchBar;
