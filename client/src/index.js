import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Components
import NavBar from './components/nav-bar/NavBar'
import LandingPage from './components/landing-page/LandingPage'
import ProgressBar from './components/progress-bar/ProgressBar'
import DownloadVersion from './components/download-version/DownloadVersion'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <LandingPage />
    {/* <ProgressBar /> */}
    {/* <DownloadVersion /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();