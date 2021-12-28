import React from 'react'
import '../App.css'
const ButtonView = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={['buttonView', props.class].join(" ")}>{props.name}</button>
        </div>
    )
}

export default ButtonView
