/*global google*/
import React from 'react';
import { localization } from '../config';

import { store } from '../redux/store';


const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

// START / Origin
const originLat = null;
const originLng = null;

// DESTINATION
const destinationLat = null;
const destinationLng = null;

console.log(this.props)

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&language=${localization.language}&region=${localization.region}`,
    loadingElement: <div className='map-layout' />,
    containerElement: <div className='map' />,
    mapElement: <div className='map-element' />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      console.log(this.props)

      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(
          this.props.originLatLng ? this.props.originLatLng.lat : originLat, this.props.originLatLng ? this.props.originLatLng.lng : originLng),
        destination: new google.maps.LatLng(
          this.props.destinationLatLng ? this.props.destinationLatLng.lat : destinationLat, this.props.destinationLatLng ? this.props.destinationLatLng.lng : destinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`You can not go there with the car. Buy a rocket.`);
        }
      })
    },
    componentWillReceiveProps(newProps) {
      console.log(newProps)
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(
          newProps.originLatLng ? newProps.originLatLng.lat : originLat, newProps.originLatLng ? newProps.originLatLng.lng : originLng),
        destination: new google.maps.LatLng(
          newProps.destinationLatLng ? newProps.destinationLatLng.lat : destinationLat, newProps.destinationLatLng ? newProps.destinationLatLng.lng : destinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`You can not go there with the car. Buy a rocket.`);
        }
      })
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={new google.maps.LatLng(originLat, originLng)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
  );

export default Map;