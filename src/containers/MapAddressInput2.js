import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { store } from '../redux/store';
import { originLatLng, destinationLatLng, origin, destination } from '../redux/actions';
import text from '../translate';

import { Button } from '../components/InputElements';

class MapAddressInput2 extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(store.getState().address.origin.origin)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.dispatch(originLatLng({ originLatLng: latLng }));
      })
      .catch(error => console.error('Error', error))

    geocodeByAddress(store.getState().address.destination.destination)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        store.dispatch(destinationLatLng({ destinationLatLng: latLng }));
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
          className="map-input-container origin"
          inputProps={inputPropsDestination} />

        <div className="label">{text()[lang].DESTINATION}</div>
        <PlacesAutocomplete
          class="map-input-container destination"
          inputProps={inputPropsOrigin} />

        <Button
          type='submit'
          myStyle='submit submit-addresses'
          text={text()[lang].SUBMIT_ADDRESSES}
        />
      </form>
    )
  }
}

export default MapAddressInput2;