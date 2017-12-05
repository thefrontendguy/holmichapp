import React from 'react'

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