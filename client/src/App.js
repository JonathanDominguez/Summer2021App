import './App.css';
// Components
import NavBar from './components/nav-bar/NavBar'
import LandingPage from './components/landing-page/LandingPage'
import ProgressBar from './components/progress-bar/ProgressBar'
import DownloadVersion from './components/download-version/DownloadVersion'


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LandingPage /> */}
      <ProgressBar />
      {/* <DownloadVersion /> */}
    </div>
  );
}

export default App;
