import React, { Component } from 'react';
import MapRender from './MapRender';
import MapAddressInput2 from './MapAddressInput2';

import { store } from '../redux/store';
import text from '../translate';
import axios from 'axios';

import Share from './Share';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      originLatLng: '',
      destinationLatLng: '',
      message: 'Hi, I need a ride from point A to point B. Can you help? :-)'
    }
  }
  /*   updateMapData = (origin, destination, originLatLng, destinationLatLng) => {
      this.setState({ origin: origin });
      this.setState({ destination: destination });
      this.setState({ originLatLng: originLatLng });
      this.setState({ destinationLatLng: destinationLatLng });
    } */


  componentDidMount = () => {
    var { match } = this.props;

    var reqdate = match.params.reqdate;
    var messageid = match.params.messageid;
    console.log(messageid);
    var requrl = window.location.hostname === "localhost"
      ? `http://localhost:3001/message/${messageid}`
      : `https://${window.location.hostname}/message/${messageid}`;

    axios.get(requrl)
      .then(data => {
        var msg = data.data.messages[0];
        this.setState({ message: msg.content })
        if (msg.originAddress) this.setState({ origin: msg.originAddress });
        if (msg.destinationAddress) this.setState({ destination: msg.destinationAddress });
      })
      .catch(err => console.log(err))

  }
  render = () => {
    var { match } = this.props;

    var originlat = match.params.originlat;
    var originlng = match.params.originlng;

    var destinationlat = match.params.destinationlat;
    var destinationlng = match.params.destinationlng;



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
          <MapAddressInput2
            message={this.state.message}
            destination={this.state.destination}
            origin={this.state.origin}
            updateMapData={this.updateMapData} unit={' km'} />
          {/* <Share origin={this.state.origin} destination={this.state.destination} /> */}
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