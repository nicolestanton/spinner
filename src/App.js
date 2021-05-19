import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import { Spinner, StaticSpinner, CompletedSpinner } from "./Components/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [spinnerComplete, setSpinnerComplete] = useState(false);

  function startSpinner() {
    setLoading(true);
    setSpinnerComplete(false);
    console.log("spinner started");
  }

  function stopSpinner() {
    setLoading(false);
    setPercentage(0);
    console.log("spinner stopped");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage === 100) {
        console.log("percentage", percentage);

        setPercentage(100);
        setLoading(false);
        return;
      } else {
        setPercentage(percentage + 1);
      }
    }, 100);

    if (loading === false && percentage === 100) {
      setPercentage(0);
      setSpinnerComplete(true);
    }

    return () => {
      clearInterval(interval);
    };
  });

  if (spinnerComplete === true) {
    return (
      <div className="app">
        <div className="spinner-container">
          <h3>Completed!</h3>
          <Spinner spinnerValue="100" className={"spinner-ring complete"} />
          <Button onClick={startSpinner} text={"Restart"} />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {loading === true && spinnerComplete === false ? (
        <div className="spinner-container active ">
          <Spinner
            spinnerValue={percentage}
            className={"spinner-ring active"}
          />
          <Button onClick={stopSpinner} text={"Stop"} />
        </div>
      ) : (
        <div className="spinner-container">
          <Spinner spinnerValue="0" className={"spinner-ring"} />
          <Button onClick={startSpinner} text={"Start"} />
        </div>
      )}
    </div>
  );
}
export default App;
