import React from 'react'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button, DatePicker, TimePicker } from '../components/InputElements';
import Autocomplete from './Autocomplete';
import axios from 'axios';

export default class MapStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      destination: '',
      addressLatLng: '',
      destinationLatLng: '',
      message: ''
    }

  }
  componentDidMount() {
    var lang = String(store.getState().lang.language);
    this.setState({ message: text("Point A", "Point B")[lang].ASK_SOCIAL_MESSAGE });
  }
  getCoordinates = (address, latLng, direction) => {
    var lang = String(store.getState().lang.language);
    if (direction === "origin") {
      store.dispatch(origin({ origin: address }));
      store.dispatch(originLatLng({ originLatLng: latLng }));
      var destinationAddress = this.state.destination ? this.state.destination : "Point B";
      this.setState({
        origin: address,
        originLatLng: latLng,
        message: text(address, destinationAddress)[lang].ASK_SOCIAL_MESSAGE
      });
    } else {
      store.dispatch(destination({ destination: address }));
      store.dispatch(destinationLatLng({ destinationLatLng: latLng }));
      var originAddress = this.state.origin ? this.state.origin : "Point A";
      this.setState({
        destination: address,
        destinationLatLng: latLng,
        message: text(originAddress, address)[lang].ASK_SOCIAL_MESSAGE
      });
    }
  }

  calculate = () => {
    var { day, month, year } = this.state;

    // example:1994-11-05T08:15:30-05:00
    var datetimestring = `${year}-${month}-${day}T00:00:00Z`;

    var lang = String(store.getState().lang.language);
    var testuser = "5a26dbac2082bc517191a597";
    var convo = {};
    //convo.user1 = store.getState().user.id.id || testuser;
    convo.user1 = testuser;
    convo.user2 = "socialmedia";
    convo.messages = [];
    convo.messages.push({
      content: text(this.state.origin, this.state.destination)[lang].ASK_SOCIAL_MESSAGE,
      user: convo.user1,
      origin: this.state.originLatLng,
      destination: this.state.destinationLatLng,
      reqdate: datetimestring,
      originAddress: '',
      destinationAddress: ''
    });
    var requrl = window.location.hostname === "localhost" ?
      "http://localhost:3001/message/create" : `https://${window.location.hostname}/message/create`;
    axios.post(requrl, convo)
      .then(data => {
        console.log(data.data);
        var msg = data.data.messages[0];
        var url = msg.route + data.data._id;
        this.props.updateMapData(
          this.state.origin,
          this.state.destination,
          this.state.originLatLng,
          this.state.destinationLatLng,
          this.state.reqdate,
          url,
          msg.content
        );

      })
      .catch(err => { console.log(err); });
  }
  render() {
    var lang = String(store.getState().lang.language);

    return (
      <form className="map-address-input">
        <div className="title">{text()[lang].MAPS_INFO_TITLE}</div>

        <div className="label">{text()[lang].FROM}</div>
        <Autocomplete direction="origin" fetchAddress={this.getCoordinates} />

        <div className="label">{text()[lang].DESTINATION}</div>
        <Autocomplete direction="destination" fetchAddress={this.getCoordinates} />

        <Button
          type='button'
          myStyle='submit submit-addresses'
          text={text()[lang].SUBMIT_ADDRESSES}
          click={this.calculate}
        />
        <textarea
          id='message'
          className='message'
          name='message'
          type='text'
          onChange={e => this.setState({ message: e.target.value })}
          value={this.state.message}
          size='30'
        ></textarea>

        <div className='label'>{text()[lang].PICKUP_TITLE}</div>
        <div className='date-time-picker'>
          <div className='label'>{text()[lang].PICKUP_DATE}</div>
          <DatePicker />
          <div className='label'>{text()[lang].PICKUP_TIME}</div>
          <TimePicker />
        </div>
      </form >
    )
  }
}