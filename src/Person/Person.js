import React from 'react';
import './Person.css';

const person = (props)=>{
    // return <p>I'am a Person and i'am {Math.floor(Math.random()*20)}!</p>
    return(
        <div className="Person">
            <p onClick={props.click}>I'am {props.name} and i'am {props.age} Years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    ) 
}

export default person