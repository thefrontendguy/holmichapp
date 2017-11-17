import React from 'react';

class Home extends React.Component {
    render() {
        
        return (
            <div class='home content'>
                <h1>{this.props.lang.HOME_TITLE}</h1>
                <p>{this.props.lang.HOME_TEXT}</p>
            </div>            
            )
        }
    } 

export default Home;