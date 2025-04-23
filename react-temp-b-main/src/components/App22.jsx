import React, { createContext, useContext, useReducer } from "react";


function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}


const CounterContext = createContext();


function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        {children}
      </div>
    </CounterContext.Provider>
  );
}


function CounterControls() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="text-center p-6 bg-white text-black rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Count: {state.count}</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}


function App() {
  return (
    <CounterProvider>
      <CounterControls />
    </CounterProvider>
  );
}

export default App;
