import React from "react";
import { ACTIONS } from "./Calculator.actions";

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
