import React from 'react';
import FontAwesome from 'react-fontawesome';

import {
    NavLink
} from "react-router-dom";

class MainLayout extends React.Component {   
    render() {
        return (
            <div className='header'>
                <NavLink to='/' className='appname'>
                    <FontAwesome
                        className='icon'
                        name='rocket'
                        size='2x'
                    />
                    <div className='title_slogan'>
                        <div className='title'>
                            {this.props.lang.APPNAME}
                        </div>
                        <div className='slogan'>
                            {this.props.lang.SLOGAN}
                        </div>
                    </div>
                </NavLink>
                <div className='links'>
                    <NavLink to='/route' className='route'>{this.props.lang.ROUTE}</NavLink>
                    <NavLink to='/login' className='login'>{this.props.lang.LOGIN}</NavLink>
                    <NavLink to='/register' className='register'>{this.props.lang.REGISTER}</NavLink>
                    <NavLink to='/profile' className='profile'>{this.props.lang.PROFILE}</NavLink>
                </div>
            </div>
        )
    }
}

export default MainLayout;