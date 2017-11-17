/*global google*/
import React from 'react';
import { localization } from '../config';

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


/* // START / Origin
const originLat = 41.8907300;
const originLng = -87.6512600;

// DESTINATION
const destinationLat = 41.8525800;
const destinationLng = -87.6514100; */
const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places" + localization.language + localization.region,
    loadingElement: <div className='map-layout' />,
    containerElement: <div className='map' />,
    mapElement: <div className='map-element' />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        // origin: new google.maps.LatLng(originLat, originLng),
        origin: new google.maps.LatLng(this.props.origin ? this.props.origin.lat : originLat, this.props.origin ? this.props.origin.lng : originLng),
        destination: new google.maps.LatLng(this.props.destination ? this.props.destination.lat : destinationLat, this.props.destination ? this.props.destination.lng : destinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
          //console.log(result);
        } else {
          //console.error(`error fetching directions ${result}`);
          console.error(`You can not go there with the car. Buy a rocket.`);
        }
      });
    },
    // update the map, when props change
    componentWillReceiveProps(newProps) {
      const DirectionsService = new google.maps.DirectionsService();
      //console.log(newProps);

      DirectionsService.route({
        origin: new google.maps.LatLng(newProps.origin ? newProps.origin.lat : originLat, newProps.origin ? newProps.origin.lng : originLng),
        destination: new google.maps.LatLng(newProps.destination ? newProps.destination.lat : destinationLat, newProps.destination ? newProps.destination.lng : destinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          this.props.distAndDur(result);
        } else {
          this.props.distAndDur(null);
          console.error("You can not go there by car. Buy a rocket.");
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={1}
    defaultCenter={new google.maps.LatLng(originLat, originLng)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
  //console.log(this.props);

export default Map;