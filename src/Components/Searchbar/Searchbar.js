import React, { useState } from "react";
import Moviecards from "../Movielist/Moviecard";

const Searchbar = ({ movies }) => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />

      {movies
        .filter((elm) => {
          if (searchTerm === "") {
            return elm;
          } else if (
            elm.name.includes(searchTerm.toLocaleLowerCase()) ||
            elm.date.includes(searchTerm.toLocaleLowerCase()) ||
            elm.type.includes(searchTerm.toLocaleLowerCase()) ||
            elm.desciption.includes(searchTerm.toLocaleLowerCase())
          ) {
            return elm;
          }
        })
        .map((movie, i) => (
          <Moviecards movie={movie} key={i} />
        ))}
    </div>
  );
};

export default Searchbar;
