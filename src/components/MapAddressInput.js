import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import FontAwesome from 'react-fontawesome';

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
console.log(this.props);
    return (
      <form className="map-address-input" onSubmit={this.handleFormSubmit}>
        <div className="label">{this.props.lang.FROM}</div>
        <PlacesAutocomplete className="map-input-container" inputProps={inputPropsOrigin} />
       
        <div className="label">{this.props.lang.DESTINATION}</div>
        <PlacesAutocomplete className="map-input-container" inputProps={inputPropsDestination} />
       
        <button className="button submit" type="submit">
        <FontAwesome
          className='icon'
          name='rocket'
        />
        {this.props.lang.SUBMIT_ADDRESSES}
        </button> 
        {(this.props.distAndDur !== null) 
          ? <div> 
              <p>
              {this.props.lang.DISTANCE} {this.props.distAndDur.routes[0].legs[0].distance.text.split(" ")[0] + this.props.unit}
              </p>
              <p>
              {this.props.lang.ESTIMATED_DURATION} {this.props.distAndDur.routes[0].legs[0].duration.text}
              </p>
            </div> 
          : <div>
              <p> 
               <br /> 
                {this.props.lang.FILL_FORM}  
              </p> 
            </div>
           }
      </form>
    )
  }
}

export default MapAddressInput;