import React from 'react'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button } from '../components/InputElements';
import Autocomplete from './Autocomplete';
import axios from 'axios';

class MapAddressInput extends React.Component {
  state = {
    address: '',
    destination: '',
    addressLatLng: '',
    destinationLatLng: '',
    day: 1,
    daysPerMonth: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    month: '',
    year: 2017,
    hours: null,
    minutes: null,
    seconds: '000',
    message: ''
  }
  componentDidMount() {
    var lang = String(store.getState().lang.language);
    this.setState({ message: text()[lang].ASK_SOCIAL_MESSAGE });
  }
  daysPerMonth = (e) => {
    var lang = String(store.getState().lang.language);
    const months = text()[lang].MONTHS;

    const selectedMonth = e.target.selectedIndex;
    const days = months[selectedMonth][1];
    //console.log(days)
    const daysPerMonthArr = [];
    for (let i = 0; i < days; i++) {
      //console.log(i + 1)
      daysPerMonthArr.push(i + 1);
      //console.log(daysPerMonthArr.length)
    }
    this.setState({ daysPerMonth: daysPerMonthArr });
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
      reqdate: datetimestring
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
  updateDateTime = (e) => {
    switch (e.target.id) {
      case 'day':
        this.setState({ day: e.target.value });
        break;
      case 'month':
        this.setState({ month: e.target.selectedIndex });
        this.daysPerMonth(e);
        break;
      case 'year':
        this.setState({ year: e.target.value });
        break;
      case 'hours':
        this.setState({ hours: e.target.value });
        break;
      case 'minutes':
        this.setState({ minutes: e.target.value });
        break;
      default:
        break;
    }
  }
  render() {
    var lang = String(store.getState().lang.language);
    const months = text()[lang].MONTHS;

    return (
      <form className="map-address-input">

        <div className="label">{text()[lang].FROM}</div>
        <Autocomplete direction="origin" fetchAddress={this.getCoordinates} />

        <div className="label">{text()[lang].DESTINATION}</div>
        <Autocomplete direction="destination" fetchAddress={this.getCoordinates} />

        <div className='label'>{text()[lang].PICKUP_DATE}</div>

        <select id='day' onChange={e => this.updateDateTime(e)}>
          {this.state.daysPerMonth.map((item, i) => {
            return <option key={i} value={i}>{i} </option>
          })}
        </select>

        <select id='month' onChange={e => this.updateDateTime(e)}>
          {months.map(function (item, i) {
            return <option key={i} value={item[0]}>{item[0]} </option>
          })}
        </select>

        <select id='year' onChange={e => this.updateDateTime(e)}>
          <option key='2017' value='2017'>2017</option>
          <option key='2018' value='2018'>2018</option>
        </select>

        <input id='hours'
          value={this.state.hours}
          onChange={e => this.updateDateTime(e)}
        />

        <input id='minutes'
          value={this.state.minutes}
          onChange={e => this.updateDateTime(e)}
        />


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
      </form>
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