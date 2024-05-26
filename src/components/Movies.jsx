import React from "react";
import { useState } from "react";

const Movies = () => {
  const [movies, SetMovies] = useState([
    { id: 1, title: "John Wick 1", ratings: 7.5 },
    { id: 2, title: "John Wick 2", ratings: 6 },
    { id: 3, title: "John Wick 3", ratings: 8 },
  ]);

  const handleClick = () => {
    SetMovies(movies.map((m) => (m.id === 1 ? { ...movies, title: "Jungle Beach" } : m)));
  };

  return (
    <>
      <div className="container py-6 text-3xl">
        {movies.map((movie) => (
          <li className="font-medium" key={Math.random()}>
            Movie: <span className="font-bold">{movie.title}</span>
          </li>
        ))}
        <button onClick={handleClick} className="text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 mr-2 rounded">
          Change Name
        </button>
      </div>
    </>
  );
};

export default Movies;
