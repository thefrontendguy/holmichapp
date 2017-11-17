import React from 'react';
import Header from './components/Header';
import Map from './components/Map';

import Translations from './components/Translations';

class App extends React.Component {
    state = {
        lang: "en_EN"
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