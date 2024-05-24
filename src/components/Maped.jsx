import React from "react";

const Maped = () => {
  const nummbers = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {nummbers.map((nummber) => (
        <ul key={Math.random() * 10}>
          <li>{nummber}</li>
        </ul>
      ))}
    </>
  );
};

export default Maped;
