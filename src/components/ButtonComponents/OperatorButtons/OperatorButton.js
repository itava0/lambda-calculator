import React from "react";

const OperatorButton = props => {
  return (
    <button className="button operators">
      {props.buttonV.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
