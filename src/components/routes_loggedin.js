import React from 'react';
import Profile from './Profile';
import Translations from './Translations';

import {
    Route
} from "react-router-dom";


class RoutesLoggedIn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const translation = Translations[this.props.lang];
        return (
            <Route path='/profile' render={(props) => (
                <Profile {...props} lang={translation} />
            )} />
        )
    }

}

export default RoutesLoggedIn;