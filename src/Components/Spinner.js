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

// export function StaticSpinner() {
//   return (
//     <div className="spinner static">
//       <span className="spinner-value">0%</span>
//       <div className="spinner-ring"></div>
//     </div>
//   );
// }

// export function CompletedSpinner() {
//   return (
//     <div className="spinner static">
//       <span className="spinner-value">100%</span>
//       <div className="spinner-ring completed"></div>
//     </div>
//   );
// }

// className={
//     spinnerValue === 100 ? "spinner-ring completed" : "spinner-ring"
//   }
