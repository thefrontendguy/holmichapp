import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Login from './components/Login';

import Translations from './components/Translations';
import { localization } from './config';

class App extends React.Component {
    state = {
        lang: localization.language
    }
    render() {
        const translation = Translations[this.state.lang];
        
        return (
            <div id='app'>
                <Header lang={translation} />
                <Map lang={translation} />
            </div>
            )
        }
    } 

export default App;