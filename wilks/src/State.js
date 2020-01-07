import React from 'react';
import Gender from './Gender';
import Input from './Input';
import Visual from './Visual';

class State extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gender: true,
            lift: 0,
            weight: 0,
            score: 0,
            drawn: false
        }
    }

    changeGender = (x) => {
        this.setState({gender: x});
    };

    changeWeight = (event) => {
        this.setState({weight: event.target.value});
    };

    changeLift = (event) => {
        this.setState({lift: event.target.value});
    };

    changeScore = (event) => {

        if(this.state.lift <= 0 || this.state.weight <= 0){
            alert('Please enter valid inputs.');
        } else {  
            let x = this.state.weight;

            if(this.state.gender === true){
                let coeff = 500 / (-216.0475144 + 16.2606339 * x + -0.002388645 * Math.pow(x, 2) + -0.00113732 * Math.pow(x, 3) + 7.01863 * Math.pow(10, -6) * Math.pow(x, 4) + -1.291 * Math.pow(10, -8) * Math.pow(x, 5));
                let final = coeff * this.state.lift;
                this.setState({score: final});
                alert(final);
            } else {
                let coeff = 500/ (594.31747775582 + -27.23842536447 * x + 0.82112226871 * Math.pow(x,2) + -0.00930733913 * Math.pow(x, 3) + 4.731582 * Math.pow(10, -5) * Math.pow(x,4) + -9.054 * Math.pow(10, -8) * Math.pow(x, 5));
                let final = coeff * this.state.lift;
                this.setState({score: final});
                alert(final);
            }
            
        }
    }

    render(){
        return(
            <div className="App">
                <Gender changeGender={this.changeGender} gender={this.state.gender}/>
                <Input changeWeight={this.changeWeight} changeLift={this.changeLift} changeScore={this.changeScore}
                 weight={this.state.weight} lift={this.state.lift} score={this.state.score}/>
                 <Visual gender={this.state.gender} score={this.state.score}/>
            </div>
        )
    }
 
}

export default State;