import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Login from './components/Login';

import Translations from './components/Translations';
import { localization } from './config';

class App extends React.Component {
    state = {
        lang: ''
    }
    componentWillMount = () => {
        const lang = localization.lang.substring(0,2);
        this.setState({lang: lang})
    }
    render() {
        const translation = Translations[this.state.lang];
        
        return (
            <div id='app'>
                <Header lang={translation} />
                <Login />
                </div>
            )
        }
    } 
    //<Map lang={translation} />

export default App;