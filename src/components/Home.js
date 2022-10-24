import { useState } from "react";
import ReusableButton from "./ReusableButton";
import NameTag from "./NameTag";
import Clicker from "./Clicker";
import RandomNumber from "./RandomNumber";
import Item from "./Item";

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Clementine", lastName: "Tinimin" },
];

const Home = () => {
  //const [names, setNames] = useState(initialNames);
  // useState är en metod som tar emot två värden i klammrar
  // det första kallar vi gör getter, alltså vi kan få värdet (tex namnen)
  // den andra kallar vi för setter, den kan vi använda för att förändra eller uppdatera värdet

  return (
    <div className="home">
      <Item />
    </div>
  );
};

export default Home;

/* 1a versionen:  <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
        <NameTag firstName={names[3].firstName} lastName={names[3].lastName} /> 
        
        
     2a versionen:    <ReusableButton reverse={true}>Hem</ReusableButton>
      {names.map((p, i) => {
        // names = arrayen med object
        // vi ska loopa igenom den här arrayen, för varje namn som finns i arrayen
        // så ska vi visa en NameTag komponent
        return (
          <NameTag key={i} firstName={p.firstName} lastName={p.lastName} />
        );
      })}*/
