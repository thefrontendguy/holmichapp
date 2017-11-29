import React from 'react';
import FontAwesome from 'react-fontawesome';

import {
    NavLink
} from "react-router-dom";

import { store } from '../redux/store';

import LanguageSwitcher from '../containers/LanguageSwitcher';
import text from '../translate';

class MainLayout extends React.Component {
    render() {
        var lang = String(store.getState().lang.language);
        
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
                            {text()[lang].APPNAME}
                        </div>
                        <div className='slogan'>
                            {text()[lang].SLOGAN}
                        </div>
                    </div>
                </NavLink>
                <div className='links'>
                    <NavLink to='/route' className='route'>{text()[lang].ROUTE}</NavLink>
                    <NavLink to='/login' className='login'>{text()[lang].LOGIN}</NavLink>
                    <NavLink to='/register' className='register'>{text()[lang].REGISTER}</NavLink>
                    <NavLink to='/profile' className='profile'>{text()[lang].PROFILE}</NavLink>
                </div>
                <LanguageSwitcher />
            </div>
        )
    }
}

export default MainLayout;