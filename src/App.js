import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import PasswordPage from './pages/passwordPage/mainFile';
import LandingBankPage from './pages/landingBankPage/mainFile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingBankPage} />
                <Route path="/password" component={PasswordPage} />
            </Switch>
        </Router>
    );
}

export default App;