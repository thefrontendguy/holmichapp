/* import React from 'react';
import axios from 'axios';

import {
    Redirect
} from "react-router-dom";

import { voteAngular, voteReact, voteVuejs } from '../redux/actions';

class Reduxtest extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    handleVoteAngular = () => {
        this.store.dispatch(voteAngular());
    }
    handleVoteReact = () => {
        this.store.dispatch(voteReact());
    }
    handleVoteVuejs = () => {
        this.store.dispatch(voteVuejs());
    }
    render() {
        console.log(this.store.getState());
        return (
            <div className='content login-form'>

                <button onClick={this.handleVoteAngular} className='button'>Angular: {}</button>

                <button onClick={this.handleVoteReact} className='button'>React</button>

                <button onClick={this.handleVoteVuejs} className='button'>VueJs</button>
            </div>
        )
    }
}


export default Reduxtest; */