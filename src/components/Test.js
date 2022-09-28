import React, { Fragment, useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    let oldCount = state.count;
    console.log(action.payload);
    switch (action.type) {
      case "increase":
        return { ...state, count: oldCount + 1 };

      case "decrease":
        return { ...state, count: oldCount - 1 };
    }
  };

  const [state, dispatched] = useReducer(reducer, { count: 0 });

  return (
    <Fragment>
      <h1>simple component for test </h1>

      <p>the current state is equal to {state.count} </p>
      <button
        onClick={() => {
          dispatched({
            type: "increase",
            payload: "nothing to do ",
          });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatched({
            type: "decrease",
            payload: "nothing to do ",
          });
        }}
      >
        {" "}
        decrease{" "}
      </button>

      <p>the lase action was </p>
    </Fragment>
  );
};

export default App;
