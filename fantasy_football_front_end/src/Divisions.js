// import React from 'react';
import Divs from './Divs';
import React, { useState } from 'react';

export default function Divisions({ allMembers }) {
    
    // const randomize = () => {
    //     let newList = members.sort(() => Math.random() - 0.5)
    //     console.log("New", newList)
    //     return newList.map((mem) => <Divs name={mem.name} titles={mem.titles} />)
    // }
    let [clicked, setClicked] = useState(0)
    let newList = allMembers.sort(() => Math.random() - 0.5)


    function randomize() {
        setClicked(++clicked)
        console.log("Clicked", clicked)
        // {clicked ? : null}
        // return newList.map((mem) => <Divs name={mem.name} titles={mem.titles} />)
        // console.log("M", mem.name))
    }

    return (
        <>
        <div className="Btn">
            <button className="BtnSize" onClick={randomize}>Randomize Divisions</button>
        </div>
        {clicked ? <><p className="Display">Divisions:</p>{newList.map((mem) => <Divs name={mem.name} titles={mem.titles} />)}</>
         : null}
        </>
    )
}
