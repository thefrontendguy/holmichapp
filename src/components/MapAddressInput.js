import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class MapAddressInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      origin: '',
      destination: '' 
    }
  }

  changeOriginAddress = (address) => {
    this.setState({origin: address});
  }
  changeDestinationAddress = (address) => {
    this.setState({destination: address});
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.origin)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.origin(latLng);
        console.log('Success', latLng)})
      .catch(error => console.error('Error', error))

    geocodeByAddress(this.state.destination)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.destination(latLng);
        console.log('Success', latLng)})
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputPropsOrigin = {
      value: this.state.origin,
      onChange: this.changeOriginAddress,
    }
    const inputPropsDestination = {
      value: this.state.destination,
      onChange: this.changeDestinationAddress,
    }

    return (
      <form className="map-address-input" onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputPropsOrigin} />
        <PlacesAutocomplete inputProps={inputPropsDestination} />
         <button type="submit">Submit</button> 
      </form>
    )
  }
}

export default MapAddressInput;