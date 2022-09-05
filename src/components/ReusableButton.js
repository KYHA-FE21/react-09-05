const ReusableButton = ({ children, reverse }) => {
  return (
    <div
      className="reuse-btn"
      style={{
        backgroundColor: reverse ? "red" : "green",
        color: reverse ? "#000" : "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default ReusableButton;
