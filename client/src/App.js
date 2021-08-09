import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import NavBar from './Components/nav-bar/NavBar'
import LandingPage from './Components/landing-page/LandingPage'
import ProgressBar from './Components/progress-bar/ProgressBar'
import OptionPage from './Components/optionPage/OptionPage';

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
                    <Route exact path = '/OptionPage'>
                      <OptionPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;