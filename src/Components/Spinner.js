import React from "react";

export function Spinner(props) {
  const { percentage, isComplete, isLoading } = props;
  const classes = `spinner-ring ${isComplete && "complete"} ${isLoading &&
    "active"}`;
  return (
    <div className="spinner-container">
      <div className="spinner" data-testid="loading-spinner">
        <div className={classes}></div>
        <span data-testid="spinner-value" className="spinner-value">
          {percentage}
          <span className="percentage-sign">%</span>
        </span>
        <h3 data-testid="spinner-state">
          {isComplete ? "Completed!" : isLoading ? "Loading..." : "Waiting"}
        </h3>
      </div>
    </div>
  );
}

export default Spinner;
