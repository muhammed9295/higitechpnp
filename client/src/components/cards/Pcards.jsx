import React from 'react';
import './pcards.css';

export default function Pcards(props) {
    return (
        <div className='pcards'>
            <div className="icon" style={{backgroundColor: props.color}}>
                <img src={props.icon} alt="icons" />
            </div>
            <div className="pDetails">
                <h1>34</h1>
                <p>{props.details}</p>
            </div>
        </div>
    )
}
