import React from "react";
import { useState } from "react";

const Counter = () => {
  const [friends, SetFriends] = useState(["Dylan Moore", "Hannah Baker"]);

  // Handlers
  const addOne = () => {
    SetFriends([...friends, "Benjamin Carter"]);
  };
  const removeOne = () => {
    SetFriends(friends.filter((friend) => friend !== "Benjamin Carter"));
  };
  const updateOne = () => {
    SetFriends(friends.map((friend) => (friend === "Benjamin Carter" ? "Victoria Carter" : friend)));
  };

  return (
    <>
      <div className="container py-6">
        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}
        <button onClick={addOne} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Add One
        </button>
        <button onClick={removeOne} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Remove One
        </button>
        <button onClick={updateOne} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Update One
        </button>
      </div>
    </>
  );
};

export default Counter;
