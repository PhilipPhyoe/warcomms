import React from 'react';
import "./InputOptions.css";

function InputOptions({Icon , title, color}) {
    return ( 
        <div className='inputOptions'>
            <Icon style={{color: color}} />
            <p>{title}</p>
        </div>
     );
}

export default InputOptions;