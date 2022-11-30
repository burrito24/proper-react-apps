import React from "react";
import { useState } from "react";
import OperatorButtons from "./components/OperatorButtons";

const  App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const opsAreDisabled = calc === "" || ops.includes(calc.slice(-1));

  const updateCalc = (value) => {
    const isOperator = ops.includes(value);
    if (isOperator && opsAreDisabled) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const renderDigits = () => {
    const digitArray = new Array(10).fill("");

    const otherComponentArray = digitArray.map((v, i) => {
      if (i === 9)
        return (
          <button onClick={() => updateCalc((0).toString())} key={0}>
            {0}
          </button>
        );
        return (
          <button onClick={() => updateCalc((i + 1).toString())} key={i + 1}>
            {i + 1}
          </button>
        );
    });

    return otherComponentArray;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <OperatorButtons operatorArray={ops} update={updateCalc} disabled={opsAreDisabled}/>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {renderDigits()}
          <button onClick={() => updateCalc(".")} disabled={opsAreDisabled}>.</button>
          <button onClick={calculate} disabled={opsAreDisabled}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
