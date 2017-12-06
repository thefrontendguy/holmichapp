import { combineReducers } from 'redux';

function userReducer(state = {
    username: '',
    email: '',
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case 'SET_EMAIL':
            return {...state, email: action.email }
        case 'SET_USERNAME':
            return {...state, username: action.username}
        case 'SET_LOGGED_IN':
            return {...state, isLoggedIn: action.isLoggedIn }
        default:
            return state
    }
}

function languageReducer(state = {
    language: 'en'
}, action) {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {...state, language: action.language }
        default:
            return state
    }
}

function latLngReducer(state = {
    originLatLng: '',
    destinationLatLng: ''
}, action) {
    switch (action.type) {
        case 'SET_ORIGIN_LATLNG':
            return {...state, originLatLng: action.originLatLng }
        case 'SET_DESTINATION_LATLNG':
            return {...state, destinationLatLng: action.destinationLatLng }
        default:
            return state
    }
}

function addressReducer(state = {
    origin: '',
    destination: ''
}, action) {
    switch (action.type) {
        case 'SET_ORIGIN':
            return {...state, origin: action.origin }
        case 'SET_DESTINATION':
            return {...state, destination: action.destination }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    lang: languageReducer,
    latLng: latLngReducer,
    address: addressReducer
});

export default rootReducer;