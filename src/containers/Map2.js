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
  /*   updateMapData = (origin, destination, originLatLng, destinationLatLng) => {
      this.setState({ origin: origin });
      this.setState({ destination: destination });
      this.setState({ originLatLng: originLatLng });
      this.setState({ destinationLatLng: destinationLatLng });
    } */
  render() {
    var { match } = this.props;

    var originlat = match.params.originlat;
    var originlng = match.params.originlng;

    var destinationlat = match.params.destinationlat;
    var destinationlng = match.params.destinationlng;

    var reqdate = match.params.reqdate;
    var messageid = match.params.messageid;



    const originLatLng2 = {};
    originLatLng2.lat = originlat;
    originLatLng2.lng = originlng;

    const destinationLatLng2 = {};
    destinationLatLng2.lat = destinationlat;
    destinationLatLng2.lng = destinationlng;

    var lang = String(store.getState().lang.language);
    return (
      <div className="map-complete">
        <div className="map-infos">
          MAP 2
          <div className="title">{text()[lang].MAPS_INFO_TITLE}</div>
          <MapAddressInput2 route={match.params} updateMapData={this.updateMapData} unit={' km'} />
          <Share origin={this.state.origin} destination={this.state.destination} />
        </div>
        <MapRender
          originLatLng={originLatLng2}
          destinationLatLng={destinationLatLng2}
          className="map"
          localization={lang} />

      </div>
    );
  }
}

export default Map;