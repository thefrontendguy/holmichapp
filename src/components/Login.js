import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div class='content login-form'>
                <form>
                    <h1>{this.props.lang.LOGIN_FORM_TITLE}</h1>
                    <label for='user'>{this.props.lang.ENTER_USERNAME}</label>
                    <input className='input' type='text' name='user' placeholder={this.props.lang.PLACEHOLDER_USERNAME} />
                    
                    <label for='password'>{this.props.lang.ENTER_PASSWORD}</label>
                    <input className='input' type='password' name='password' placeholder={this.props.lang.PLACEHOLDER_PASSWORD} />
                
                    <button type='button' className='button submit'>{this.props.lang.LOGIN}</button>
                </form>
            </div>
        )
    }
}

export default Login;