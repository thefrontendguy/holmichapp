import React, { Component } from 'react';
import MapRender from './MapRender';
import MapAddressInput from './MapAddressInput';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      distAndDur: null
    }
  }
  updateOrigin = (latLng) => {
    this.setState({origin: latLng})
  }
  updateDestination = (latLng) => {
    this.setState({destination: latLng});
  }
  calculateRoute = (result) => {
    this.setState({distAndDur: result});
    //alert("fired calculateRoute");
  }
  render() {
    return (
      <div className="map-complete">
        <div className="map-infos">
         <div className="title">{this.props.lang.MAPS_INFO_TITLE}</div>
          <MapAddressInput lang={this.props.lang} origin={this.updateOrigin} destination={this.updateDestination} distAndDur={this.state.distAndDur} />
        </div>
        <MapRender origin={this.state.origin} destination={this.state.destination} distAndDur={this.calculateRoute} className="map" />
      </div>
    );
  }
}

export default Map;