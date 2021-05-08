import React from 'react';

export default function randomizeBtn({ buttonPressed, setButton }) {

    function randomize() {
        setButton(!buttonPressed)
        // console.log("Button pressed?", buttonPressed)
    }

    return (
        <div>
            <button onClick={randomize}>Randomize</button>
        </div>
    )
}
