import React, { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "updateStep":
      return { ...state, step: action.payload };

  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleStepChange = (event) => {
    dispatch({ type: "updateStep", payload: Number(event.target.value) });
  };

  return (
    <div>
      <h2>Count Value: {state.count}</h2>

      <p> 
        <button onClick={handleIncrement}>+ Increment By {state.step} </button>
        <button onClick={handleDecrement}>- Decrement By {state.step} </button>
      </p>

      <label>
      Number to Increment/Decrement by: </label>
        <input
          type="number"
          value= {state.step}
          onChange={handleStepChange}
        />
      
      
    </div>
  );
};

export default Counter;
