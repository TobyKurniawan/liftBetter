import React from 'react';

//Add icons
import {FaFemale} from "react-icons/fa";
import {FaMale} from "react-icons/fa";

function Gender(props){

        return(
            <div className="gender">
                <div onClick={() => props.changeGender(false)}
                 style={{backgroundColor: props.gender ? '' : 'black'}}>
                    <FaFemale className='button' color="pink" size="10em" />
                </div>
                <div onClick={() => props.changeGender(true)}
                 style={{backgroundColor: props.gender ? 'black' : ''}}>
                    <FaMale className='button' color="#00b1ff" size="10em" />
                </div>
            </div>
        );
    
}

export default Gender;