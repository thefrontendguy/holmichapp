import React from 'react';
import { store } from '../redux/store';

import text from '../translate';

import LanguageSwitcher from '../containers/LanguageSwitcher';

class Profile extends React.Component {
    render() {
        var username = store.getState().user.username.username;
        var isLoggedIn = store.getState().user.isLoggedIn.isLoggedIn;
        var lang = String(store.getState().lang.language);

        return (
            <div className='profile  content'>
            {text()[lang].APPNAME}
                <h1>
                    {isLoggedIn ? `You are logged in as ${username}` : "please log in or register"}
                </h1>
    
                <LanguageSwitcher />
            </div>
        )
    }
}

export default Profile;