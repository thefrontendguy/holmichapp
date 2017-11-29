import React from 'react';

import Header from './components/Header';

import Home from './components/Home';
import Map from './components/Map';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';

import Translations from './Translations';

import text from './translate';

import { localization } from './config';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            lang: localization.language,
            loggedIn: false,
            user: null
        }
    }
    updateUser = user => {
        this.setState({user: user});
    }
    render() {
        const translation = Translations[this.state.lang];                
        return (
            <Router>
                <div id='app'>                
                    <Header lang={translation} />
                    <Route exact path='/' render={(props) => (
                        <Home {...props} lang={translation} />
                    )} />
                    <Route path='/route' render={(props) => (
                        <Map {...props} lang={translation} />
                    )} />
                    <Route path='/login' render={(props) => (
                        <Login {...props} lang={translation} updateUser={this.updateUser} user={this.state.user} />
                    )} />
                    <Route path='/register' render={(props) => (
                        <Register {...props} lang={translation} />
                    )} />
                    <Route path='/profile' render={(props) => (
                        <Profile {...props} lang={translation} />
                    )} /> 
                </div>
            </Router>
            )
        }
    } 

export default App;