export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const _previousOperand = parseFloat(previousOperand);
  const _currentOperand = parseFloat(currentOperand);

  if (isNaN(_previousOperand) || isNaN(_currentOperand)) return "";

  let computation;
  switch (operation) {
    case "+":
      computation = _previousOperand + _currentOperand;
      break;
    case "-":
      computation = _previousOperand - _currentOperand;
      break;
    case "*":
      computation = _previousOperand * _currentOperand;
      break;
    case "÷":
      computation = _previousOperand / _currentOperand;
      break;
    default:
      computation = "";
  }
  return computation.toString();
};
