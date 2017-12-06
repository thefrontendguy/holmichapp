import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import { store } from '../redux/store';

class InputOrigin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
        }
        this.onChange = (address) => {
            this.setState({ address });
            this.getLatLng();
        }
    }
    getLatLng = () => {
        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.props.fetchAddress(this.state.address, latLng);
            })
            .catch(error => console.log('Error', error))
    }

    render() {
        //console.log(this.props)
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        return (
            <PlacesAutocomplete inputProps={inputProps} />
        )
    }
}

export default InputOrigin