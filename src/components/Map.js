import React, { Component } from 'react';
import MapRender from './MapRender';
import MapAddressInput from './MapAddressInput';

import Translations from './Translations';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      lang: "en_EN"
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

export default Map;