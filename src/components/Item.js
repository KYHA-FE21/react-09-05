import { useState } from "react";
import Card from "./Card";

const Item = ({ item }) => {
  //const [rating, setRating] = useState(10);
  //const [text, setText] = useState("This is an example of an item.");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default Item;
