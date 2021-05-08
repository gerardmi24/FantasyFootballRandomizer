import './App.css';
import RandomizeBtn from './RandomizeBtn';
import React, { useState } from 'react';
import MemberCard from './MemberCard';

function App() {
  
  const [membersObj, setMembersObj] = useState(["Gerard Mistretta ", "Aunt Donna ", "Uncle Len ", "Andrew Minerva ", "Dominic Mistretta ", "Danny Fitzpatrick ", "Matt Cinnamon ", "Brendan Cinnamon ", "Jake Giaquinto ", "Frank Mistretta ", "Ryan McNamara ", "Niko Hawkesworth ", "Nick Minerva ", "Uncle Billy O "])
  let [buttonPressed, setButtonPressed] = useState(false)

  return (
    <div className="App">
      Minerva Mayhem League
      <RandomizeBtn buttonPressed={buttonPressed} setButton={setButtonPressed} members={membersObj} />
      <MemberCard buttonPressed={buttonPressed} members={membersObj} />
      {/* {membersObj.sort(() => Math.random() - 0.5)} */}
    </div>
  );
}

export default App;
