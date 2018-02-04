import React from 'react';
import axios from 'axios';

import {
    Link,
    Redirect
} from "react-router-dom";

import { Button } from '../components/InputElements';

import { store } from '../redux/store';
import { email, username, isLoggedIn } from '../redux/actions';
import text from '../translate';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: null
        }
    }
    updateEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    updatePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    findUser = () => {
        var user = {}
        user.email = this.state.email;
        user.password = this.state.password;
        var requrl = window.location.hostname === "localhost" ?
            "http://localhost:3001" : `https://${window.location.hostname}`;
        axios.post(`${requrl}/user/login`, user)
            .then(res => {

                this.setState({ user: res.data, password: '' }, () => {
                    store.dispatch(email({
                        email: this.state.email
                    }))
                    store.dispatch(username({
                        username: this.state.user.username
                    }))
                    store.dispatch(isLoggedIn({
                        isLoggedIn: true
                    }))
                }
                );


            })
            .catch(error => console.log(error.response))
    }

    clickButton = () => {
        alert("clicked");
    }

    render() {
        var lang = String(store.getState().lang.language);

        return (
            <div className='content login-form'>

                {this.state.user === null ? '' : <Redirect push to="/profile" user={this.state.user} />}
                <form>
                    <h1>{text()[lang].LOGIN_FORM_TITLE}</h1>

                    <label htmlFor='user'>{text()[lang].ENTER_USERNAME}</label>
                    <input
                        type='email'
                        className='input username'
                        name='email'
                        placeholder={text()[lang].PLACEHOLDER_USERNAME}
                        onChange={this.updateEmail}
                    />

                    <label htmlFor='password'>{text()[lang].ENTER_PASSWORD}</label>
                    <input
                        type='password'
                        className='input password'
                        name='password'
                        placeholder={text()[lang].PLACEHOLDER_PASSWORD}
                        onChange={this.updatePassword}
                    />

                    <Button
                        type='button'
                        text={text()[lang].LOGIN}
                        myStyle='submit signin'
                        click={this.findUser}
                    />

                    <hr />
                    {text()[lang].NEW_HERE}
                    <Link to='/register'>
                        <Button
                            type='button'
                            text={text()[lang].REGISTER}
                            myStyle='submit register'
                        />
                    </Link>
                </form>
            </div>
        )
    }
}

export default Login;