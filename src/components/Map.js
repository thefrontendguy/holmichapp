import React, { Component } from 'react';
import MapRender from '../containers/MapRender';
import MapAddressInput from '../containers/MapAddressInput';

import { store } from '../redux/store';
import text from '../translate';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: ''
    }
  }
  updateMapData = (origin, destination) => {
    this.setState({ origin: origin });
    this.setState({ destination: destination });
    console.log(origin)
    console.log(destination)
  }
  render() {
    console.log(this.state.origin)
    console.log(this.state.destination)
    var lang = String(store.getState().lang.language);
    return (
      <div className="map-complete">
        <div className="map-infos">
          <div className="title">{text()[lang].MAPS_INFO_TITLE}</div>
          <MapAddressInput updateMapData={this.updateMapData} unit={' km'} />
        </div>
        <MapRender
          originLatLng={this.state.origin}
          destinationLatLng={this.state.destination}
          className="map"
          localization={lang} />
      </div>
    );
  }
}

export default Map;