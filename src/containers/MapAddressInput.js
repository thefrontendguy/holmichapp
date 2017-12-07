import React from 'react'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button, DatePicker, TimePicker } from '../components/InputElements';
import Autocomplete from './Autocomplete';
import axios from 'axios';

class MapAddressInput extends React.Component {
  state = {
    address: '',
    destination: '',
    addressLatLng: '',
    destinationLatLng: '',
    message: ''
  }
  componentDidMount() {
    var lang = String(store.getState().lang.language);
    this.setState({ message: text()[lang].ASK_SOCIAL_MESSAGE });
  }
  getCoordinates = (address, latLng, direction) => {
    if (direction === "origin") {
      store.dispatch(origin({ origin: address }));
      store.dispatch(originLatLng({ originLatLng: latLng }));
      this.setState({
        origin: address,
        originLatLng: latLng,
      });
    } else {
      store.dispatch(destination({ destination: address }));
      store.dispatch(destinationLatLng({ destinationLatLng: latLng }));
      this.setState({
        destination: address,
        destinationLatLng: latLng,
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
        var url = msg.route + msg._id;
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

        <Button
          type='button'
          myStyle='submit submit-addresses'
          text={text()[lang].SUBMIT_ADDRESSES}
          click={this.calculate}
        />

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
        />

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

/* {(this.props.distAndDur !== null)
          ? <div>
            <p>
              {text()[lang].DISTANCE} {this.props.distAndDur.routes[0].legs[0].distance.text.split(" ")[0] + this.props.unit}
            </p>
            <p>
              {text()[lang].ESTIMATED_DURATION} {this.props.distAndDur.routes[0].legs[0].duration.text}
            </p>
          </div>
          : <div>
            <p>
              <br />
              {text()[lang].FILL_FORM}
            </p>
          </div>
      } */

export default MapAddressInput;