import React from 'react';

import Login from './Login';
//import Register from './Register';

import Translations from './Translations';

import {
    Route
} from "react-router-dom";


class RoutesLoggedIn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.lang)
        const translation = Translations[this.props.lang];
        return (
            <div>
            <Route path='/login' render={(props) => (
                <Login {...props} lang={translation} />
            )} />
            <Route path='/register' render={(props) => (
                <Login {...props} lang={translation} />
            )} />
            </div>
        )
    }

}

export default RoutesLoggedIn;