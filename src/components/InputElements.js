import React, { Component } from 'react'

import { store } from '../redux/store';
import text from '../translate';

export const Button = (props) => {
    var click;
    if (typeof props.click === 'function') {
        click = props.click;
    } else {
        click = () => { };
    }
    return (
        <button
            type={props.type}
            className={'button ' + props.myStyle}
            onClick={click}
            value={props.text}>
            {props.text}
        </button>
    )
}

export class Stepper extends Component {
    stepDone = (e) => {
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');

        if (e.target.className === 'row step1') {
            step1.className = 'row step1 done';
            step2.className = 'row step2';
        }
        if (e.target.className === 'row step2') {
            step2.className = 'row step2 done';
            step1.className = 'row step1';
        }
    }
    render() {
        var lang = String(store.getState().lang.language);
        const step1 = text()[lang].MAP_STEP_1;
        const step2 = text()[lang].MAP_STEP_2;
        return (
            <div className="stepper">
                <div id='step1' className="row step1 done" onClick={e => this.stepDone(e)} >
                    <div className="list"></div>
                    <div className="line"></div>
                    <div className="text">{step1}</div>
                </div>
                <div id='step2' className="row step2" onClick={e => this.stepDone(e)} >
                    <div className="list"></div>
                    <div className="line"></div>
                    <div className="text">{step2}</div>
                </div>
            </div>
        )
    }
}

export class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daysPerMonth: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
            day: 0,
            month: 0,
            year: 2017
        }
    }
    daysPerMonth = (e) => {
        var lang = String(store.getState().lang.language);
        const months = text()[lang].MONTHS;

        const selectedMonth = e.target.selectedIndex;
        const days = months[selectedMonth][1];
        const daysPerMonthArr = [];
        for (let i = 0; i < days; i++) {
            daysPerMonthArr.push(i + 1);
        }
        this.setState({ daysPerMonth: daysPerMonthArr });
    }
    updateDateTime = (e) => {
        switch (e.target.id) {
            case 'day':
                this.setState({ day: e.target.value });
                break;
            case 'month':
                this.setState({ month: e.target.selectedIndex });
                this.daysPerMonth(e);
                break;
            case 'year':
                this.setState({ year: e.target.value });
                break;
            default:
                break;
        }
    }
    render() {
        var lang = String(store.getState().lang.language);
        const months = text()[lang].MONTHS;
        return (
            <div className='date-picker'>
                <select id='day' onChange={e => this.updateDateTime(e)}>
                    {this.state.daysPerMonth.map((item, i) => {
                        return <option key={i} value={i}>{i} </option>
                    })}
                </select>

                <select id='month' onChange={e => this.updateDateTime(e)}>
                    {months.map(function (item, i) {
                        return <option key={i} value={item[0]}>{item[0]} </option>
                    })}
                </select>

                <select id='year' onChange={e => this.updateDateTime(e)}>
                    <option key='2017' value='2017'>2017</option>
                    <option key='2018' value='2018'>2018</option>
                </select>
            </div>
        )
    }
}

export class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            hours: 0
        }
    }
    daysPerMonth = (e) => {
        var lang = String(store.getState().lang.language);
        const months = text()[lang].MONTHS;

        const selectedMonth = e.target.selectedIndex;
        const days = months[selectedMonth][1];
        const daysPerMonthArr = [];
        for (let i = 0; i < days; i++) {
            daysPerMonthArr.push(i + 1);
        }
        this.setState({ daysPerMonth: daysPerMonthArr });
    }
    updateDateTime = (e) => {
        switch (e.target.id) {
            case 'minutes':
                this.setState({ minutes: e.target.value });
                break;
            case 'hours':
                this.setState({ hours: e.target.selectedIndex });
                this.daysPerMonth(e);
                break;
            default:
                break;
        }
    }
    render() {
        var lang = String(store.getState().lang.language);
        const months = text()[lang].MONTHS;
        return (
            <div className='time-picker'>
                <select id='hours' onChange={e => this.updateDateTime(e)}>
                    <option key='0' value={this.state.hours}>0</option>
                    <option key='1' value={this.state.hours}>1</option>
                    <option key='2' value={this.state.hours}>2</option>
                    <option key='3' value={this.state.hours}>3</option>
                    <option key='4' value={this.state.hours}>4</option>
                    <option key='5' value={this.state.hours}>5</option>
                    <option key='6' value={this.state.hours}>6</option>
                    <option key='7' value={this.state.hours}>7</option>
                    <option key='8' value={this.state.hours}>8</option>
                    <option key='9' value={this.state.hours}>9</option>
                    <option key='10' value={this.state.hours}>10</option>
                    <option key='11' value={this.state.hours}>11</option>
                    <option key='12' value={this.state.hours}>12</option>
                    <option key='13' value={this.state.hours}>13</option>
                    <option key='14' value={this.state.hours}>14</option>
                    <option key='15' value={this.state.hours}>15</option>
                    <option key='16' value={this.state.hours}>16</option>
                    <option key='17' value={this.state.hours}>17</option>
                    <option key='18' value={this.state.hours}>18</option>
                    <option key='19' value={this.state.hours}>19</option>
                    <option key='20' value={this.state.hours}>20</option>
                    <option key='21' value={this.state.hours}>21</option>
                    <option key='22' value={this.state.hours}>22</option>
                    <option key='23' value={this.state.hours}>23</option>
                </select>
                <select id='minutes' onChange={e => this.updateDateTime(e)}>
                    <option key='0' value={this.state.minutes}>0</option>
                    <option key='5' value={this.state.minutes}>5</option>
                    <option key='10' value={this.state.minutes}>10</option>
                    <option key='15' value={this.state.minutes}>15</option>
                    <option key='20' value={this.state.minutes}>20</option>
                    <option key='25' value={this.state.minutes}>25</option>
                    <option key='30' value={this.state.minutes}>30</option>
                    <option key='35' value={this.state.minutes}>35</option>
                    <option key='40' value={this.state.minutes}>40</option>
                    <option key='45' value={this.state.minutes}>45</option>
                    <option key='50' value={this.state.minutes}>50</option>
                    <option key='55' value={this.state.minutes}>55</option>
                </select>
            </div>
        )
    }
}