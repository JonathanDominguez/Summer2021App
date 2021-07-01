import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Components
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();