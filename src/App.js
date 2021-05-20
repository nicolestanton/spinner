import React, { useEffect, useReducer } from "react";
import Button from "./Components/Button";
import { Spinner } from "./Components/Spinner";

export const initialState = {
  isLoading: false,
  percentage: 0,
  isComplete: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LOADING": {
      //toggle starting and stopping of spinner
      const isLoading = !state.isLoading;
      return {
        ...state,
        isLoading,
        isComplete: false,
        percentage: isLoading ? state.percentage : 0
      };
    }
    case "UPDATE_PERCENTAGE": {
      //updating percentage value as its loading
      const { payload } = action;
      return {
        ...state,
        percentage: payload === undefined ? state.percentage + 1 : payload,
        isComplete: state.percentage === 100 ? true : false
      };
    }
    case "IS_COMPLETE": {
      //setting spinner to 100% when it complete
      const { payload } = action;
      return {
        ...state,
        percentage: payload === true ? 100 : state.percentage,
        isComplete: payload
      };
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval;
    if (state.isLoading) {
      interval = setInterval(() => {
        dispatch({
          type: "UPDATE_PERCENTAGE"
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [state.isLoading]);

  console.log("__", state.isComplete, state.isLoading, state.percentage);

  return (
    <div className="app">
      <Spinner
        percentage={state.percentage}
        isComplete={state.isComplete}
        isLoading={state.isLoading}
      />
      <div className="seperator"></div>
      <Button
        onClick={() => dispatch({ type: "TOGGLE_LOADING" })}
        text={state.isLoading ? "Stop" : "Start"}
      />
    </div>
  );
}
export default App;
