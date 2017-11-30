import React, { Component } from 'react';
import MapRender from '../containers/MapRender';
import MapAddressInput from '../containers/MapAddressInput';

import { store } from '../redux/store';
import text from '../translate';

class Map extends Component {
  constructor() {
    super();
    this.state = {
      distAndDur: null,
      route_possible: null
    }
  }
  calculateRoute = (result) => {
    this.setState({
      distAndDur: result
    });
  }

  routePossible = (bool) => {
    this.setState({ route_possible: bool });
  }
  render() {
    var lang = String(store.getState().lang.language);

    return (
      <div className="map-complete">
        <div className="map-infos">
          <div className="title">{text()[lang].MAPS_INFO_TITLE}</div>
          <MapAddressInput distAndDur={this.state.distAndDur} routePossible={this.routePossible} unit={' km'} />
        </div>
        <MapRender
          origin={store.getState().route.originLatLng.originLatLng}
          destination={store.getState().route.destinationLatLng.destinationLatLng}
          distAndDur={this.calculateRoute} routePossible={this.routePossible} className="map" localization={lang} />
      </div>
    );
  }
}

export default Map;