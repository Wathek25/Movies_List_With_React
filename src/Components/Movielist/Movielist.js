import React from "react";
import Moviecards from "./Moviecard";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, i) => (
        <Moviecards movie={movie} key={i} />
      ))}
    </div>
  );
};

export default Movies;
