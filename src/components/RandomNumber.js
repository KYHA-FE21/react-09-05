import { useState } from "react";

const RandomNumber = ({ rand }) => {
  const [num, setNum] = useState(1);

  const generateRandomNumber = () => {
    rand = Math.floor(Math.random() * 10) + 1;
    setNum(rand);
    // num är = rand alltså vårt random number)
  };

  return (
    <div>
      <h1>Number is: {num}</h1>
      {num === 7 ? (
        <h2>YOU WIN!!!</h2>
      ) : (
        <button onClick={generateRandomNumber}>Random Number</button>
      )}
    </div>
  );
};

export default RandomNumber;
