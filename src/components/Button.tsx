import React from "react";

const Button = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      onClick={() => {
        setCount((current) => (current += 1));
      }}
    >
      count: {count}
    </div>
  );
};

export default Button;
