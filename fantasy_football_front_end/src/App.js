import './App.css';
import React, { useState } from 'react';
import RandomizeBtn from './RandomizeBtn';
import MemberCard from './MemberCard';
import Divisions from './Divisions';


function App() {
  
  const [membersObj, setMembersObj] = useState([{name: "Gerard Mistretta - ", titles: "3x Champ"}, {name: "Aunt Donna - ", titles: 0}, {name: "Uncle Len - ", titles: 0}, {name: "Andrew Minerva - ", titles: 0}, {name: "Dominic Mistretta - ", titles: 0}, {name: "Danny Fitzpatrick - ", titles: "3x Champ"}, {name: "Matt Cinnamon - ", titles: 0}, {name: "Brendan Cinnamon - ", titles: 0}, {name: "Jake Giaquinto - ", titles: "1x Champ"}, {name: "Frank Mistretta - ", titles: 0}, {name: "Ryan McNamara - ", titles: 0}, {name: "Niko Hawkesworth - ", titles: 0}, {name: "Nick Minerva - ", titles: 0}, {name: "Uncle Billy O - ", titles: 0}])
  let [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        Minerva Mayhem League
      </div>
      <div>
        <RandomizeBtn count={count} setCount={setCount} />
        <MemberCard count={count} members={membersObj} /> 
      </div>
      <Divisions allMembers={membersObj} />  
    </>
  );
}

export default App;
