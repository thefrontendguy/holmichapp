import React, { Component } from 'react';
import Map from './components/Map';
import MapAddressInput from './components/MapAddressInput';

class App extends Component {
  render() {
    return (
      <div className="map-container">
      <div className='map-addresses-input'>
          <MapAddressInput />
          <MapAddressInput />
      </div>
        <Map className="map" />
      </div>
    );
  }
}

export default App;