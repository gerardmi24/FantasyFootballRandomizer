import './App.css';
import RandomizeBtn from './RandomizeBtn';
import React, { useState } from 'react';
import MemberCard from './MemberCard';

function App() {
  
  const [membersObj, setMembersObj] = useState([{name: "Gerard Mistretta - ", titles: 3}, {name: "Aunt Donna - ", titles: 0}, {name: "Uncle Len - ", titles: 0}, {name: "Andrew Minerva - ", titles: 0}, {name: "Dominic Mistretta - ", titles: 0}, {name: "Danny Fitzpatrick - ", titles: 3}, {name: "Matt Cinnamon - ", titles: 0}, {name: "Brendan Cinnamon - ", titles: 0}, {name: "Jake Giaquinto - ", titles: 1}, {name: "Frank Mistretta - ", titles: 0}, {name: "Ryan McNamara - ", titles: 0}, {name: "Niko Hawkesworth - ", titles: 0}, {name: "Nick Minerva - ", titles: 0}, {name: "Uncle Billy O - ", titles: 0}])
  let [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        Minerva Mayhem League
      </div>
      <RandomizeBtn count={count} setCount={setCount} />
      <MemberCard count={count} members={membersObj} />   
    </>
  );
}

export default App;
