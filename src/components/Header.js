import React from 'react';

import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='header'>
                       
                <div className='appname'>
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
                </div>
                <div className='user'>
                    <a href='#' className='login'>{this.props.lang.LOGIN}</a>
                    <a href='#' className='register'>{this.props.lang.REGISTER}</a>
                </div>
            </div>
        )
    }
}

export default Header;