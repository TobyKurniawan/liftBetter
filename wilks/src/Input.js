import React from 'react';

function Input(props){

    return (
        <div className="input">
            <div>
                Enter your weight (kg)
                <input type="number" min="0" max="2000" weight={props.weight} onChange={props.changeWeight}/>
            </div>
            <div>
                Enter your lifted weight (kg)
                <input type="number" min="0" max="2000" lift={props.lift} onChange={props.changeLift}/>
            </div>
            <div onClick={props.changeScore}>
                Calculate!
            </div>
            <div>
                My weight is {props.weight}.
                My lift is {props.lift}.
            </div>
        </div>
    );
    
}

export default Input;