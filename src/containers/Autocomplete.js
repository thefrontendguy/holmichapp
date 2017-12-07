import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class InputOrigin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
        }

    }
    handleChanges = (address) => {
        this.setState({ address });
        this.getLatLng(address);
    }

    getLatLng = (address) => {
        geocodeByAddress(address || this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.props.fetchAddress(this.state.address, latLng, this.props.direction);
            })
            .catch(error => console.log('Error', error))
    }

    render() {
        //console.log(this.props)
        const inputProps = {
            value: this.state.address,
            onChange: this.handleChanges
        }

        return (
            <PlacesAutocomplete onSelect={this.handleChanges}
                onEnterKeyDown={this.handleChanges} inputProps={inputProps} />
        )
    }
}

export default InputOrigin