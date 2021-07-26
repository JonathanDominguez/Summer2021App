import './App.css';
// Components
import NavBar from './Components/nav-bar/NavBar'
// import LandingPage from './Components/landing-page/LandingPage'
import ProgressBar from './Components/progress-bar/ProgressBar'
// import DownloadVersion from './Components/download-version/DownloadVersion'


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