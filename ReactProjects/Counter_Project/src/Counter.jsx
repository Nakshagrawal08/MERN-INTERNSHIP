import React, { useReducer } from 'react';

function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      case '+5':
        return state + 5;
      case 'reset':
        return 0;
      default:
        return state; // Important: Return the state if no action matches
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 border rounded-lg shadow-lg bg-blue-100">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">{count}</h1>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={() => dispatch({ type: 'Increment' })}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={() => dispatch({ type: 'Decrement' })}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={() => dispatch({ type: '+5' })}
          >
            Plus 5
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;