import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import PasswordPage from './pages/passwordPage/mainFile';
import LandingBankPage from './pages/landingBankPage/mainFile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Redirection} />
                <Route path="/h1" component={PasswordPage} />
                <Route path="/h2" component={LandingBankPage} />
            </Switch>
        </Router>
    );
}

function Redirection() {
    return <Redirect to="/h1"/>
}

export default App;