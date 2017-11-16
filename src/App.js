import React from 'react';
import Header from './components/Header';
import Map from './components/Map';

class App extends React.Component {
    render() {
        return (
            <div id='app'>
                <Header />
                <Map />
            </div>
        )
    }
} 

export default App;