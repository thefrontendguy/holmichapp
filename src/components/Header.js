import React from 'react';

import { NavLink } from "react-router-dom";

import { store } from '../redux/store';

import text from '../translate';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            true: true,
            false: false
        }
    }
    render() {
        var lang = String(store.getState().lang.language);
        const isLoggedIn = store.getState().user.isLoggedIn;
        return (
            <div className='header'>
                <NavLink to='/' className='appname'>
                    <div className='title_slogan'>
                        <div className='title'>
                            {text()[lang].APPNAME}
                        </div>
                        <div className='slogan'>
                            {text()[lang].SLOGAN}
                        </div>
                    </div>
                </NavLink>
                <div className='links'>
                    {isLoggedIn
                        ? <div>
                            <NavLink to='/route' className='route'>{text()[lang].ROUTE}</NavLink><NavLink to='/profile' className='profile'>{text()[lang].PROFILE}</NavLink>
                        </div>
                        : <div>
                            <NavLink to='/route' className='route'>{text()[lang].ROUTE}</NavLink>
                            <NavLink to='/login' className='login'>{text()[lang].LOGIN}</NavLink>
                            <NavLink to='/register' className='register'>{text()[lang].REGISTER}</NavLink>
                        </div>
                    }
                </div>
                </div>
                )
    }
}

export default MainLayout;