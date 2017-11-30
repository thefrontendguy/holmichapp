import React from 'react';

import Header from './components/Header';

import Home from './components/Home';
import Map from './components/Map';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';

import { store } from './redux/store';
import text from './translate';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {
    render() {
        const lang = store.getState().lang.language;
        const translation = text[lang];
        return (
            <Router>
                <div id='app'>
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route path='/route' render={(props) => (
                        <Map {...props} lang={translation} />
                    )} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/profile' component={Profile} />
                </div>
            </Router>
        )
    }
}

export default App;