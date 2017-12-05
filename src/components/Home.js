import React from 'react';

import { store } from '../redux/store';
import text from '../translate';

class Home extends React.Component {
    render() {
        var lang = String(store.getState().lang.language);

        return (
            <div className='home content'>
                <h1> {text("Cahit")[lang].GREETING}</h1>
            </div>
        )
    }
}

export default Home;