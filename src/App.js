import React, { Component } from 'react';
import MapRender from './components/MapRender';
import MapAddressInput from './components/MapAddressInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null
    }
  }
  updateOrigin = (latLng) => {
    this.setState({origin: latLng})
  }
  updateDestination = (latLng) => {
    this.setState({destination: latLng})
  }
  render() {
    console.log(this.state)
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