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
    language: 'de'
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

const rootReducer = combineReducers({
    user: userReducer,
    lang: languageReducer
});

export default rootReducer;