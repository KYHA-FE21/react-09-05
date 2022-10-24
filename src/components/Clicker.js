import { useState } from "react";

const Clicker = () => {
  const [age, setAge] = useState(20);

  const handleAgeUp = () => {
    // metod för att öka åldern med 1
    // vi behöver kalla på vår setter så vi kan uppdatera age värdet
    setAge(age + 1);
  };

  const handleAgeDown = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>Use State Hook</h1>
      <h2>Age: {age}</h2>
      <button onClick={handleAgeUp} style={{ marginRight: "20px" }}>
        Age Up
      </button>
      <button onClick={handleAgeDown}>Age Down</button>
    </div>
  );
};

export default Clicker;
