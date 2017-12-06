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
    destinationLatLng: ''
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
    console.log(this.props)
    this.props.updateMapData(
      this.state.origin,
      this.state.destination,
      this.state.originLatLng,
      this.state.destinationLatLng
    );
  }
  render() {
    var lang = String(store.getState().lang.language);

    return (
      <form className="map-address-input">

        <div className="label">{text()[lang].FROM}</div>
        <Autocomplete direction="origin" fetchAddress={this.getCoordinates} />

        <div className="label">{text()[lang].DESTINATION}</div>
        <Autocomplete direction="destination" fetchAddress={this.getCoordinates} />

        <div className='label'>{text()[lang].PICKUP_DATE}</div>


        <select>
          <option value="x">x</option>
        </select>
        <Button
          type='button'
          myStyle='submit submit-addresses'
          text={text()[lang].SUBMIT_ADDRESSES}
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