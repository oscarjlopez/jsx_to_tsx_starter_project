import { useState } from 'react';
import React from 'react';


function SumComponent() {
  const [num1, setNum1] = useState<number>(0);  // Type annotation for number state
  const [num2, setNum2] = useState<number>(0);  // Type annotation for number state
  const [sum, setSum] = useState<number>(0);    // Type annotation for sum state

  const calculateSum = () => {
    setSum(num1 + num2);  // Ensure num1 and num2 are treated as numbers
  };

  return (
    <div>
      <br />
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}  // Convert the string to number
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}  // Convert the string to number
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
