import React, { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";

function Nav() {
  const [movies, SetMovies] = useContext(MovieContext);
  return (
    <div>
      <p> George</p>
      <p>List of Movies: {movies?.length}</p>
    </div>
  );
}

export default Nav;
