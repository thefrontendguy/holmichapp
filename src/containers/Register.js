import React from 'react';
import axios from 'axios';

import { Redirect, Link } from "react-router-dom";

import { store } from '../redux/store';
import text from '../translate';

import { Button } from '../components/InputElements';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            user: null
        }
    }
    updateUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    updateEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    updatePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    createUser = () => {
        var user = {}
        user.username = this.state.username;
        user.email = this.state.email;
        user.password = this.state.password;
        var requrl = window.location.hostname === "localhost" ?
            "localhost:3001" : window.location.hostname;
        axios.post(`https://${requrl}/user/create`, user)
            .then(res => {

            })
            .catch(error => console.log(error.response))
    }

    render() {
        var lang = String(store.getState().lang.language);
        return (
            <div className='content login-form'>

                {this.state.user === null ? '' : <Redirect push to="/login" user={this.state.user} />}
                <form>
                    <h1>{text()[lang].REGISTER_FORM_TITLE}</h1>

                    <label htmlFor='user'>{text()[lang].ENTER_USERNAME}</label>
                    <input
                        type='text'
                        className='input username'
                        name='username'
                        placeholder={text()[lang].PLACEHOLDER_USERNAME}
                        onChange={this.updateUsername}
                    />

                    <label htmlFor='user'>{text()[lang].ENTER_EMAIL}</label>
                    <input
                        type='email'
                        className='input email'
                        name='email'
                        placeholder={text()[lang].PLACEHOLDER_EMAIL}
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
                        text={text()[lang].REGISTER}
                        myStyle='submit register'
                        click={this.createUser}
                    />

                    <hr />
                    {text()[lang].ALREADY_HAS_ACCOUNT}
                    <Link to='/login'>
                        <Button
                            type='button'
                            text={text()[lang].LOGIN}
                            myStyle='submit signin'
                        />
                    </Link>
                </form>
            </div>
        )
    }
}

export default Register;