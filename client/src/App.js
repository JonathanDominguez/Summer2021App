import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import NavBar from './Components/nav-bar/NavBar'
import LandingPage from './Components/landing-page/LandingPage'
import ProgressBar from './Components/resumePage/progress-bar/ProgressBar'
import OptionPage from './Components/optionPage/OptionPage';
import CoverLetter from './Components/coverLetterPage/hold';
import ContactUs from './Components/contactUsPage/holder';
import AboutUs from './Components/aboutPage/about';

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
                    <Route exact path = '/CoverLetter'>
                      <CoverLetter />
                    </Route>
                    <Route exact path = '/Contact'>
                      <ContactUs />
                    </Route>
                    <Route exact path = '/About'>
                      <AboutUs />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;