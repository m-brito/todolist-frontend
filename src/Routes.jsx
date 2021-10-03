import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import Home from './pages/home/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;