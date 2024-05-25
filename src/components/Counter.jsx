import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(0);

  // Handlers
  const incrementCount = () => SetCount(count + 1);
  const decrementCount = () => SetCount(count - 1);
 
  return (
    <>
      <div className="container py-6">
        <h1 className="text-3xl ml-14">{count}</h1>
        <button onClick={incrementCount} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          +
        </button>
        <button onClick={decrementCount} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded">
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
