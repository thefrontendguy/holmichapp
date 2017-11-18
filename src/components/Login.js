import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        user: null
        }
    }
    updateUsername = (e) => {
        this.setState({username: e.target.value});
    }
    updatePassword = (e) => {
        this.setState({password: e.target.value});
    }
    findUser(id) {
        axios.get(`http://localhost:3001/user/${id}`)
            .then(res => res)
            .then(user => console.log(user.data.email))
            .catch(error => console.log(error.response))
    }
    render() {
        console.log(this.state.username);
        console.log(this.state.password);
        return (
            <div className='content login-form'>
                <form>
                    <h1>{this.props.lang.LOGIN_FORM_TITLE}</h1>

                    <label htmlFor='user'>{this.props.lang.ENTER_USERNAME}</label>
                    <input 
                        type='text' 
                        className='input username' 
                        name='user' 
                        placeholder={this.props.lang.PLACEHOLDER_USERNAME}
                        onChange = {this.updateUsername}
                    />
                    
                    <label htmlFor='password'>{this.props.lang.ENTER_PASSWORD}</label>
                    <input 
                        type='password' 
                        className='input password' 
                        name='password' 
                        placeholder={this.props.lang.PLACEHOLDER_PASSWORD} 
                        onChange = {this.updatePassword}
                    />
                
                    <button type='submit' className='button submit'>      
                        {this.props.lang.LOGIN}
                    </button>

                </form>
            </div>
        )
    }
}

export default Login;