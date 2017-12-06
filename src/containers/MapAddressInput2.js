import React from 'react'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button } from '../components/InputElements';
import Autocomplete from './Autocomplete';

class MapAddressInput extends React.Component {
  state = {
    address: '',
    destination: '',
    addressLatLng: '',
    destinationLatLng: '',
    message: ''
  }

  render() {
    var lang = String(store.getState().lang.language);
    const weekdays = text()[lang].DAYS;
    const months = text()[lang].MONTHS;

    console.log(this.props.route)

    return (
      <form className="map-address-input">

        <div className="label">{text()[lang].FROM}</div>
        <div className='text'>
          {this.props.route.originlat}
          {this.props.route.originlng}
        </div>
        <br />

        <div className="label">{text()[lang].DESTINATION}</div>
        <div className='text'>
          {this.props.route.destinationlat}
          {this.props.route.destinationlng}
        </div>
        <br />

        <div className='label'>{text()[lang].PICKUP_DATE}</div>
        <div className='text'>
          {this.props.route.reqdate}
          {this.props.route.destinationlng}
        </div>
        <br />

        <textarea
          id='message'
          className='message'
          name='message'
          type='text'
          onChange={e => this.setState({ message: e.target.value })}
          value=''
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