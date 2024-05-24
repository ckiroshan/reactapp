import React from "react";

const Calculate = () => {
  const myName = "Kane";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      <h1>Hey, {myName}</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>My Friends list: {["Alex", "John", "Mack"]}</p>
      <p>4 x 4 = {multiply(4, 4)}</p>
      <p className={specialClass}>Special Class</p>
    </>
  );
};

export default Calculate;
