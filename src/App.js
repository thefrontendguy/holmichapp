import React from 'react';

import Header from './components/Header';

import Home from './components/Home';
import Map from './components/Map';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';

import { store } from './redux/store';

import {
    Switch,
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {
    render() {
        const isLoggedIn = store.getState().user.isLoggedIn;
        return (
            <Router>
                <div id='app'>
                    <Header />
                    {isLoggedIn
                        ?
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/route' component={Map} />
                            <Route path='/profile' component={Profile} />
                        </Switch>
                        :
                        <Switch>
                            <Route path='/route' component={Map} />
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                        </Switch>
                    }
                </div>
            </Router>
        )
    }
}

export default App;