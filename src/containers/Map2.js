import React, { Component } from 'react';
import MapRender from './MapRender';
import MapAddressInput2 from './MapAddressInput2';

import { store } from '../redux/store';
import text from '../translate';

import Share from './Share';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      originLatLng: '',
      destinationLatLng: ''
    }
  }
  updateMapData = (origin, destination, originLatLng, destinationLatLng) => {
    this.setState({ origin: origin });
    this.setState({ destination: destination });
    this.setState({ originLatLng: originLatLng });
    this.setState({ destinationLatLng: destinationLatLng });
  }
  render() {
    console.log(this.state.origin)
    console.log(this.state.destination)
    console.log(this.state.originLatLng)
    console.log(this.state.destinationLatLng)
    var lang = String(store.getState().lang.language);
    return (
      <div className="map-complete">
        <div className="map-infos">
          MAP 2
          <div className="title">{text()[lang].MAPS_INFO_TITLE}</div>
          <MapAddressInput2 updateMapData={this.updateMapData} unit={' km'} />
          <Share origin={this.state.origin} destination={this.state.destination} />
        </div>
        <MapRender
          originLatLng={this.state.originLatLng}
          destinationLatLng={this.state.destinationLatLng}
          className="map"
          localization={lang} />

      </div>
    );
  }
}

export default Map;