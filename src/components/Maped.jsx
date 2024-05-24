import React from "react";

const Maped = () => {
  const nummbers = [1, 2, 3, 4, 5, 6];
  const userInfo = [
    {
      username: "kane996",
      email: "kane996@gmail.com",
      location: "Brownsville",
    },
    {
      username: "mich213",
      email: "mich213@gmail.com",
      location: "Amityville",
    },
    {
      username: "hunter291",
      email: "hunter291@gmail.com",
      location: "Austinville",
    },
  ];

  return (
    <>
      {/* Loop through an array of numbers */}
      {nummbers.map((nummber) => (
        <ul key={Math.random() * 10}>
          <li>{nummber}</li>
        </ul>
      ))}
      {/* Loop through an array of Objects */}
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
};

export default Maped;
