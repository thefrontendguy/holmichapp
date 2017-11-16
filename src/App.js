import React, { Component } from 'react';
import MapRender from './components/MapRender';
import MapAddressInput from './components/MapAddressInput';

import Translations from './components/Translations';

class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      lang: "fr"
    }
  }
  updateOrigin = (latLng) => {
    this.setState({origin: latLng})
  }
  updateDestination = (latLng) => {
    this.setState({destination: latLng});
  }
  render() {
    console.log(Translations[this.state.lang].APPNAME)
    return (
      <div className="map-complete">
        <div className='map-addresses-input'>
            <MapAddressInput update={this.updateOrigin} />
            <MapAddressInput update={this.updateDestination} />
        </div>
        <MapRender origin={this.state.origin} destination={this.state.destination} className="map" />
      </div>
    );
  }
}

export default App;