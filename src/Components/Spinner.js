import React from "react";

export function Spinner(props) {
  const { spinnerValue, className } = props;
  return (
    <div className="spinner">
      <span className="spinner-value">{spinnerValue}%</span>
      <div className={className}></div>
    </div>
  );
}
