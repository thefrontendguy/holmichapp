import React from 'react';

import { store } from '../redux/store';
import text from '../translate';

class Home extends React.Component {
    render() {
        var lang = String(store.getState().lang.language);
        var username = store.getState().user.username.username;
        username = username ? username : 'Guest user';
        return (
            <div className='home content'>
                <h1> {text(username)[lang].GREETING}</h1>
            </div>
        )
    }
}

export default Home;