import React from 'react'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button } from '../components/InputElements';
import Autocomplete from './Autocomplete';

class MapAddressInput extends React.Component {
  state = {
    address: '',
    originAddress: '',
    destinationAddress: '',
    addressLatLng: '',
    destinationLatLng: '',
    message: 'Hi, I need a ride from point A to point B. Can you help? :-)',
    messageReply: ''
  }

  render() {
    var { message, origin, destination } = this.props;
    var lang = String(store.getState().lang.language);
    const weekdays = text()[lang].DAYS;
    const months = text()[lang].MONTHS;

    return (
      <form className="map-address-input">

        <div className="label">Message:</div>
        <div className='text'>
          {message}
        </div>
        <br />

        <div className="label">{text()[lang].FROM}</div>
        <div className='text'>
          {origin}
        </div>
        <br />

        <div className="label">{text()[lang].DESTINATION}</div>
        <div className='text'>
          {destination}
        </div>
        <br />

        <div className='label'>{text()[lang].PICKUP_DATE}</div>
        <div className='text'>
        </div>
        <br />

        <textarea
          id='message'
          className='message'
          name='message'
          type='text'
          onChange={e => this.setState({ messageReply: e.target.value })}
          value={this.state.messageReply}
          size='30'
        />

        <Button
          type='button'
          myStyle='submit accept-request'
          text={text()[lang].ACCEPT_REQUEST}
          click={this.calculate}
        />

        <Button
          type='button'
          myStyle='submit deny-request'
          text={text()[lang].DENY_REQUEST}
          click={this.calculate}
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