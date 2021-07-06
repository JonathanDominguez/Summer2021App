import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Components
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import ProgressBar from './Components/ProgressBar/ProgressBar'
import DownloadVersion from './Components/DownloadVersion/DownloadVersion'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    {/* <LandingPage /> */}
    {/* <ProgressBar /> */}
    <DownloadVersion />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();