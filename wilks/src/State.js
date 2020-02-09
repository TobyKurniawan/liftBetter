import React from 'react';
import Gender from './Gender';
import Input from './Input';
import Visual from './Visual';

class State extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gender: true,
            units: true,
            bench: 0,
            squat: 0,
            deadlift: 0,
            lift: 0,
            weight: 0,
            score: 0,
        }
    }

    changeGender = (x) => {
        this.setState({gender: x});
    };

    changeUnits = (x) => {
        this.setState({units: x});
    }

    changeWeight = (event) => {
        this.setState({weight: event.target.value});
    };

    changeBench = (event) => {
        this.setState({bench: event.target.value});
    };    

    changeSquat = (event) => {
        this.setState({squat: event.target.value});
    };

    changeDeadlift = (event) => {
        this.setState({deadlift: event.target.value});
    };

    changeLift = (event) => {
        this.setState({lift: event.target.value});
    };

    changeScore = (event) => {

        if(this.state.weight <= 0){
            alert('Please enter valid inputs.');
        } else {  
            let x = this.state.weight;
            if(this.state.units === false){
                x = x / 2.2;
            }

            if(this.state.gender === true){
                let coeff = 500 / (-216.0475144 + 16.2606339 * x + -0.002388645 * Math.pow(x, 2) + -0.00113732 * Math.pow(x, 3) + 7.01863 * Math.pow(10, -6) * Math.pow(x, 4) + -1.291 * Math.pow(10, -8) * Math.pow(x, 5));
                let lift = parseInt(this.state.squat) + parseInt(this.state.deadlift) + parseInt(this.state.bench);
                if(this.state.units === false){
                    lift = lift / 2.2;
                }
                let final = coeff * lift;
                this.setState({score: final});
            } else {
                let coeff = 500/ (594.31747775582 + -27.23842536447 * x + 0.82112226871 * Math.pow(x,2) + -0.00930733913 * Math.pow(x, 3) + 4.731582 * Math.pow(10, -5) * Math.pow(x,4) + -9.054 * Math.pow(10, -8) * Math.pow(x, 5));
                let lift = parseInt(this.state.squat) + parseInt(this.state.deadlift) + parseInt(this.state.bench);
                if(this.state.units === false){
                    lift = lift / 2.2;
                }
                let final = coeff * lift;
                this.setState({score: final});
            }
            
        }
    }

    render(){
        return(
            <div className="App">
                <div className="AppCont">
                    <div>
                        <Gender changeGender={this.changeGender} gender={this.state.gender}/>
                        <Input changeWeight={this.changeWeight} changeLift={this.changeLift} changeBench={this.changeBench}
                        changeSquat={this.changeSquat} changeDeadlift={this.changeDeadlift} changeScore={this.changeScore}
                        weight={this.state.weight} bench={this.state.bench} squat={this.state.squat} deadlift={this.state.deadlift}
                        lift={this.state.lift} score={this.state.score} units={this.state.units} changeUnits={this.changeUnits}/>
                    </div>
                    <div >
                        <Visual gender={this.state.gender} score={this.state.score}/>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default State;