import { combineReducers } from 'redux';

function userReducer(state = {
    username: '',
    email: '',
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case 'SET_EMAIL':
            return Object.assign({}, state, {
                email: action.email
            })
        case 'SET_USERNAME':
            return Object.assign({}, state, {
                username: action.username
            })
        case 'SET_LOGGED_IN':
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            })
        default:
            return state
    }
}

function languageReducer(state = {
    language: 'en'
}, action) {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return Object.assign({}, state, {
                language: action.language
            })
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
            return Object.assign({}, state, {
                originLatLng: action.originLatLng
            })
        case 'SET_DESTINATION_LATLNG':
            return Object.assign({}, state, {
                destinationLatLng: action.destinationLatLng
            })
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
            return Object.assign({}, state, {
                origin: action.origin
            })
        case 'SET_DESTINATION':
            return Object.assign({}, state, {
                destination: action.destination
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer,
    lang: languageReducer,
    route: latLngReducer,
    address: addressReducer
});

export default rootReducer;