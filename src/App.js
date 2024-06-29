// src/App.js
import React from 'react';
import Weather from './component/Weather';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #282c34;
    color: white;
    text-align: center;
  }
`;

const AppContainer = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <Weather />
        </AppContainer>
    );
}

export default App;
