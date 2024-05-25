import React from "react";
import { useState } from "react";

const Counter = () => {
  const [username, SetUsername] = useState("John Doe");

  const names = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Williams", "Abigail Lewis", "Joshua Lee", "Natalie Hill", "Dylan Moore", "Hannah Baker", "Gabriel Perez", "Lily Nelson", "Benjamin Carter", "Victoria Carter", "Samuel Sanchez", "Zoe Russell", "Lucas Coleman", "Madison Coleman"];

  // Handlers
  const nameChanger = () => {
    const randomName = Math.floor(Math.random() * names.length);
    SetUsername(names[randomName]);
  };

  return (
    <>
      <div className="container py-6">
        <h1 className="text-3xl ml-14">{username}</h1>
        <button onClick={nameChanger} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Change Name
        </button>
      </div>
    </>
  );
};

export default Counter;
