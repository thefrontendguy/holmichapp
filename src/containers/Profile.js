import React from 'react';
import { store } from '../redux/store';
import { email, username, isLoggedIn } from '../redux/actions';
import { Redirect } from "react-router-dom";

import text from '../translate';

import LanguageSwitcher from '../containers/LanguageSwitcher';

import { Button } from '../components/InputElements';

class Profile extends React.Component {
    logout = () => {
        store.dispatch(email({
            email: ''
        }))
        store.dispatch(username({
            username: ''
        }))
        store.dispatch(isLoggedIn({
            isLoggedIn: false
        }))
        alert('logout')
        window.location.replace("/login");
    }
    render() {
        var username = store.getState().user.username.username;
        var isLoggedIn = store.getState().user.isLoggedIn;
        var lang = String(store.getState().lang.language);
        console.log(isLoggedIn);
        return (
            <div className='profile content'>
                <h1>
                    {isLoggedIn ? text(username)[lang].GREETING : ""}
                </h1>
                <div className='subtitle'>
                    {text()[lang].LOGOUT_MESSAGE}
                </div>
                <div className='text'>
                    <Button
                        type='button'
                        text={text()[lang].LOGOUT}
                        myStyle='cancel'
                        click={this.logout}
                    />
                </div>
                <div className='subtitle'>
                    {text()[lang].APP_LANGUAGE}
                </div>
                <LanguageSwitcher />
            </div>
        )
    }
}

export default Profile;