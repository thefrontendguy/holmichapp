import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Login from './components/Login';

import Home from './components/Home';

import Translations from './components/Translations';
import { localization } from './config';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {
    state = {
        lang: localization.language
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
                        <Login {...props} lang={translation} />
                    )} />
                    <Route path='/register' render={(props) => (
                        <Login {...props} lang={translation} />
                    )} />
                </div>
            </Router>
            )
        }
    } 

export default App;