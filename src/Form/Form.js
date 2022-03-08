import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [ans, setAns] = useState(0);

  const num1Handler = (event) => {
    setNum1(event.target.value);
  };
  const num2Handler = (event) => {
    setNum2(event.target.value);
  };

  const addition = (event) => {
    event.preventDefault();
    setAns(Number(num1) + Number(num2));
  };
  
  const subtract = (event) => {
    event.preventDefault();
    setAns(Number(num1) - Number(num2));
  };
  
  const multiply = (event) => {
    event.preventDefault();
    setAns(Number(num1) * Number(num2));
  };
  
  const division = (event) => {
    event.preventDefault();
    setAns(Number(num1) / Number(num2));
  };
  
  return (
    <>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Number 1</label>
          <input type="number" onChange={num1Handler} />
        </div>
        <div className="new-expense__control">
          <label>Number 2</label>
          <input type="number" onChange={num2Handler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={addition}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
      </div>

      <div className="main">
        <table className="main-table">
          <tbody>
            <tr>
              <th>Answer</th>
            </tr>
            <tr>
              <td>{ans}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
