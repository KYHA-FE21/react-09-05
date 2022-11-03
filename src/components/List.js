import Item from "./Item";

const List = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No ratings yet...</p>;
  }

  return (
    <div>
      {feedback.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
