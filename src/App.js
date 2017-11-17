import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Login from './components/Login';

import Home from './components/Home';

import Translations from './components/Translations';
import { localization } from './config';

import {
    Route,
    HashRouter
} from "react-router-dom";

class App extends React.Component {
    state = {
        lang: localization.language
    }
    render() {
        const translation = Translations[this.state.lang];
        
        return (
            <HashRouter>
                <div id='app'>                
                    <Header lang={translation} />
                    <Route exact path='/' component={Home} />
                    <Route path='/route' render={(props) => (
                        <Map {...props} lang={translation} />
                    )} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Login} />
                </div>
            </HashRouter>
            )
        }
    } 
//    <Map lang={translation} />

export default App;