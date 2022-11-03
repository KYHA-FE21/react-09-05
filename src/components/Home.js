import { useState, useEffect } from "react";
import ReusableButton from "./ReusableButton";
import NameTag from "./NameTag";
import Clicker from "./Clicker";
import RandomNumber from "./RandomNumber";
import Item from "./Item";
import Effect from "./Effect";
import FeedbackData from "../data/FeedbackData";
import List from "./List";
import Card from "./Card";

const initialNames = [
  { firstName: "Helena", lastName: "Johansson" },
  { firstName: "Doris", lastName: "Dorisson" },
  { firstName: "Tore", lastName: "Toresson" },
  { firstName: "Clementine", lastName: "Tinimin" },
];

const Home = () => {
  const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  //const [names, setNames] = useState(initialNames);
  // useState är en metod som tar emot två värden i klammrar
  // det första kallar vi gör getter, alltså vi kan få värdet (tex namnen)
  // den andra kallar vi för setter, den kan vi använda för att förändra eller uppdatera värdet

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:6001/feedback");
    const data = await response.json();

    setFeedback(data);
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:6001/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    addFeedback(newFeedback);

    setText("");
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="home">
      <List feedback={feedback} />
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service?</h2>
          <div>
            <input
              type="text"
              placeholder="Write your rating..."
              value={text}
              onChange={handleTextChange}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </Card>
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
