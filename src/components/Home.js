import React from 'react';
import { addvar } from './helpers';

class Home extends React.Component {
    render() {

        return (
            <div className='home content'>
                <h1> { addvar(this.props.lang.GREETING, "Cahit") }</h1>
            </div>            
        )
    }
} 
/* <h1>{this.props.lang.HOME_TITLE}</h1>
<p>{this.props.lang.HOME_TEXT}</p> */

export default Home;