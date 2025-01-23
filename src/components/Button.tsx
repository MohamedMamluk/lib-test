import React from "react";
import "./output.css";
const Button = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      className="text-red-500 bg-white border-red-500 border rounded-lg"
      onClick={() => {
        setCount((current) => (current += 1));
      }}
    >
      count: {count}
    </div>
  );
};

export default Button;
