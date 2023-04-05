import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increased = () => {
        setCount(count+1);
    }

    const decreased = () => {
        if (count === 0) {
            setCount(0);
        }
        else {
            setCount(count-1);
        }
    }

    const resetToZero = () => {
        setCount(0);
    }

    return(
        <div>
            <h1>Value = {count} </h1>
            <button onClick={increased} >Up</button>
            <button onClick={decreased} >Down</button>
            <button onClick={resetToZero} >Reset</button>
        </div>
    );
}

export default Counter;