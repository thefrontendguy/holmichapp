import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import FontAwesome from 'react-fontawesome';

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

class MapAddressInput extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(store.getState().address.origin.origin)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.dispatch(originLatLng({ originLatLng: latLng }));
        console.log('Success', latLng)
        console.log(store.getState().route.originLatLng.originLatLng)
      })
      .catch(error => console.error('Error', error))
      
    geocodeByAddress(store.getState().address.destination.destination)
    .then(results => getLatLng(results[0]))
    .then(latLng => {
      store.dispatch(destinationLatLng({ destinationLatLng: latLng }));
      console.log('Success', latLng)
      console.log(store.getState().route.destinationLatLng.destinationLatLng)
      })
      .catch(error => console.error('Error', error))
  }
  changeOriginAddress = (address) => {
    store.dispatch(origin({ origin: address }));
  }
  changeDestinationAddress = (address) => {
    store.dispatch(destination({ destination: address }));
  }
  render() {
    const inputPropsOrigin = {
      value: store.getState().address.origin.origin,
      onChange: this.changeOriginAddress,
    }
    const inputPropsDestination = {
      value: store.getState().address.destination.destination,
      onChange: this.changeDestinationAddress,
    }
    var lang = String(store.getState().lang.language);

    return (
      <form className="map-address-input" onSubmit={this.handleFormSubmit}>
        <div className="label">{text()[lang].FROM}</div>
        <PlacesAutocomplete
          className="map-input-container"
          inputProps={inputPropsDestination} />

        <div className="label">{text()[lang].DESTINATION}</div>
        <PlacesAutocomplete
          className="map-input-container"
          inputProps={inputPropsOrigin} />

        <button className="button submit" type="submit">
          <FontAwesome
            className='icon'
            name='rocket'
          />
          {text()[lang].SUBMIT_ADDRESSES}
        </button>
        {(this.props.distAndDur !== null)
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
        }
      </form>
    )
  }
}

export default MapAddressInput;