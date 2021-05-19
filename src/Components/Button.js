import React from "react";

function Button(props) {
  const { text, onClick } = props;
  return (
    <div className="button">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
export default Button;
