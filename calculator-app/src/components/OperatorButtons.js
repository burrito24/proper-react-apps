import React from "react";



const OperatorButtons = ({
  operatorArray,
  update,
  disabled
}) => {
  return (
    <>
      {operatorArray.map((val) => (
        <button type="button" onClick={() => update(val)} disabled={disabled}>
          {val}
        </button>
      ))}
    </>
  );
};

export default OperatorButtons;
