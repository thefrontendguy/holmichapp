/*global google*/
import React from 'react';

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

// START / Origin
const originLat = 41.8907300;
const originLng = -87.6512600;

// DESTINATION
const destinationLat = 41.8525800;
const destinationLng = -87.6514100;


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(originLat, originLng),
        destination: new google.maps.LatLng(destinationLat, destinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
         // alert('open the console and see Map.js line 40-41');
        console.log(result.routes['0'].legs['0'].distance);
        console.log(result.routes['0'].legs['0'].duration);
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(originLat, originLng)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default Map;