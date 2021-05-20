import React from "react";

export function Spinner(props) {
  const { percentage, isComplete, isLoading } = props;
  const classes = `spinner-ring ${isComplete && "complete"} ${isLoading &&
    "active"}`;
  return (
    <div className="spinner-container">
      <h3 data-testid="spinner-state">
        {isComplete ? "Completed" : isLoading ? "Loading" : "Waiting"}
      </h3>
      <div className="spinner" data-testid="loading-spinner">
        <span data-testid="spinner-value" className="spinner-value">
          {percentage}%
        </span>
        <div className={classes}></div>
      </div>
    </div>
  );
}

export default Spinner;
