import React from 'react';

export default function randomizeBtn({ count, setCount }) {

    function randomize() {
        setCount(count+1)
        // console.log("Button pressed?", buttonPressed)
    }

    return (
        <div className="Btn">
            <button className="BtnSize" onClick={randomize}>Randomize Draft Order</button>
        </div>
    )
}
