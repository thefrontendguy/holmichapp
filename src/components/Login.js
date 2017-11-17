import React from 'react';

class Login extends React.Component {

    click = () => {
        alert("clicked");
    }
    render() {
        return (
            <div class='login-form'>
            <form>
                <h1>This is the best login screen ever</h1>
                
                <input type='text' name='user' placeholder='Username or email' />
                <input type='password' name='password' placeholder='password' />
            
                <input type='button' value='Login' onClick={this.click} />
            </form>
            </div>
        )
    }
}

export default Login;