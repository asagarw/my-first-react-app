import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
        <p onClick={props.click}>My name is {props.name}. Age is {props.age}</p>
        <p>{props.children}</p>
        <input onChange={props.type} type='text' value={props.name}/>
        </div>
    );
}

export default person;