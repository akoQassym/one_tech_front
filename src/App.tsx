import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import PasswordPage from './pages/passwordPage/mainFile';
import LandingBankPage from './pages/landingBankPage/mainFile';
import BankCreditPage from './pages/bankCreditPage/mainFile';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingBankRedirect} />
                <Route exact path="/bank" component={LandingBankPage} />
                <Route path="/password" component={PasswordPage} />
                <Route path="/bank/credits" component={BankCreditPage} />
            </Switch>
        </Router>
    );
}

const LandingBankRedirect = () => {
    return (
        <Redirect to='/bank'/>
    )
}

export default App;