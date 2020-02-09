import React from 'react';
import {FaWeight} from "react-icons/fa";
import bench from './Bench.png';
import squat from './Squat.png';
import deadlift from './Deadlift.png';

function Input(props){

    return (
        <div className="input">
            <div>
                <FaWeight className="fixed" color="white" size="15em"/>
                <span className="weight-input"><input type="number" min="0" max="2000" weight={props.weight} onChange={props.changeWeight}/></span>
                <div onClick={() => props.changeUnits(true)}className="kg">KG</div>
                <div onClick={() => props.changeUnits(false)}className="lbs">LBS</div>
            </div>
            <div className="lift-container">
                <div className="lift-input">
                    <div className="standard"><img src={squat}></img></div>
                    <input type="number" min="0" max="2000" squat={props.squat} onChange={props.changeSquat}/>
                </div>
                <div className="lift-input">
                    <div className="standard"><img src={bench}></img></div>
                    <input type="number" min="0" max="2000" bench={props.bench} onChange={props.changeBench}/>
                </div>
                <div className="lift-input">
                    <div className="standard"><img src={deadlift}></img></div>
                    <input type="number" min="0" max="2000" deadlift={props.deadlift} onChange={props.changeDeadlift}/>
                </div>
            </div>
            <div className="calc" onClick={props.changeScore}>
                Calculate!
            </div>
        </div>
    );
    
}

export default Input;