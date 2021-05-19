import React from "react";

export function Spinner(props) {
  const { spinnerValue } = props;
  return (
    <div className="spinner">
      <span className="spinner-value">{spinnerValue}%</span>
      <div className="spinner-ring active"></div>
    </div>
  );
}

export function StaticSpinner(props) {
  const { spinnerValue } = props;
  return (
    <div className="spinner static">
      <span className="spinner-value">0%</span>
      <div className="spinner-ring"></div>
    </div>
  );
}

// className={
//     spinnerValue === 100 ? "spinner-ring completed" : "spinner-ring"
//   }
