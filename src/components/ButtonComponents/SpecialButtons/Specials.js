import React, { useState } from "react";
import data from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setCount] = useState(data.specials);
  console.log("color button", useState());
  return (
    <div className="wrapper">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      specialState.map((buttonV, index) => (
        <SpecialButton key={index} buttonV={buttonV} />
      ))}
    </div>
  );
};

export default Specials;
