import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class MapAddressInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.update(latLng);
        console.log('Success', latLng)})
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form className="map-address-input" onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
         <button type="submit">Submit</button> 
      </form>
    )
  }
}

export default MapAddressInput;