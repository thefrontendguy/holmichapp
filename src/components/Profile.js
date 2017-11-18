import React from 'react';

class Profile extends React.Component {
    render () {
        return (
            <div className='profile content'>
            <h1>{this.props.lang.PROFILE_TITLE}</h1>
            <p>{this.props.lang.PROFILE_GREETING}</p>
        </div>  
        )
    }
}

export default Profile;