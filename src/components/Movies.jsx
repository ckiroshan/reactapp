import React from "react";
import { useState } from "react";

const Movies = () => {
  const [movie, SetMovie] = useState({
    title: "Equalizer 3",
    ratings: 7.5,
  });

  const handleClick = () => {
    SetMovie({ ...movie, ratings: 10 });
  };

  return (
    <>
      <div className="container py-6">
        <h1 className="text-3xl">
          Movie: <span className="font-bold">{movie.title}</span>
        </h1>
        <p className="text-3xl">
          Rating: <span className="font-semibold">{movie.ratings}</span>
        </p>
        <button onClick={handleClick} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Change Rating
        </button>
      </div>
    </>
  );
};

export default Movies;
