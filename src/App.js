import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import { Spinner } from "./Components/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [spinnerComplete, setSpinnerComplete] = useState(false);

  function startSpinner() {
    setLoading(true);
    setSpinnerComplete(false);
  }

  function stopSpinner() {
    setLoading(false);
    setSpinnerComplete(false);
    setPercentage(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage === 100) {
        setPercentage(100);
        setLoading(false);
      } else {
        setPercentage(percentage + 1);
      }
    }, 100);

    // when spinner gets stopped by button press set it back to 0
    if (loading === false) {
      setPercentage(0);
    }

    if (percentage === 100) {
      setSpinnerComplete(true);
      setPercentage(0);
      setLoading(false);
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
      {loading === true ? (
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
