import './App.css';
// Components
import NavBar from './Components/nav-bar/NavBar'
import LandingPage from './Components/landing-page/LandingPage'
import ProgressBar from './Components/progress-bar/ProgressBar'
// import DownloadVersion from './Components/download-version/DownloadVersion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router>
                <Switch>
                    <Route exact path = '/'>
                      <LandingPage />
                    </Route>
                    <Route exact path = '/PDF'>
                      <ProgressBar />
                    </Route>
                </Switch>
              {/* <DownloadVersion /> */}
            </Router>
        </div>
    );
}

export default App;