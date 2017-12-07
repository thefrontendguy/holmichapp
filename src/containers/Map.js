import React, { Component } from 'react';
import MapRender from './MapRender';
import MapStep1 from './MapStep1';

import { store } from '../redux/store';
import text from '../translate';

import { Stepper } from '../components/InputElements';

import Share from './Share';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      originLatLng: '',
      destinationLatLng: '',
      reqdate: "0000-00-00T00:00:00Z",
      url: "http://www.localhost:3000/route",
      msgcontent: "Hi, I need a ride from point A to point B. Can you help? :-)"
    }
  }
  updateMapData = (origin, destination, originLatLng, destinationLatLng, reqdate, url, msgcontent) => {
    this.setState({ origin: origin });
    this.setState({ destination: destination });
    this.setState({ originLatLng: originLatLng });
    this.setState({ destinationLatLng: destinationLatLng });
    this.setState({ reqdate: reqdate });
    this.setState({ url: url });
    this.setState({ msgcontent: msgcontent });
  }
  render() {
    /*console.log(this.state.origin)
    console.log(this.state.destination)
    console.log(this.state.originLatLng)
    console.log(this.state.destinationLatLng)*/
    var lang = String(store.getState().lang.language);
    var route = {
      content: this.state.msgcontent,
      url: this.state.url
    };
    return (
      <div className="map-complete">
        <div className="map-infos">

          <div className="title">{text()[lang].MAP_STEP_TITLE}</div>
          <Stepper />
          <br />
          <MapStep1 updateMapData={this.updateMapData} unit={' km'} />
          <Share route={route} origin={this.state.origin} destination={this.state.destination} />
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