import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import { Spinner, StaticSpinner } from "./Components/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  function startSpinner() {
    setLoading(true);
    console.log("spinner started");
  }

  function stopSpinner() {
    setLoading(false);
    setPercentage(0);
    console.log("spinner stopped");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage >= 100) {
        setPercentage(100);
        setLoading(false);
      } else {
        setPercentage(percentage + 1);
      }
    }, 100);

    if (loading === false) {
      setPercentage(0);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="app">
      {loading === true ? (
        <div className="spinner-container active ">
          <Spinner spinnerValue={percentage} />
          <Button onClick={stopSpinner} text={"Stop"} />
        </div>
      ) : (
        <div className="spinner-container">
          <StaticSpinner spinnerValue="0" />
          <Button onClick={startSpinner} text={"Start"} />
        </div>
      )}
    </div>
  );
}
export default App;
