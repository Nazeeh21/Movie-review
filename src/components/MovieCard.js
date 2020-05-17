import React from "react";
import { NavLink } from 'react-router-dom';

const IMG_URL = "https://image.tmdb.org/t/p/w185";

export default function({ title, poster }) {
  
  return (
    <div
      style={{
        border: "1px solid black",
        width: "fit-content",
        padding: "20px"
      }}
    >
      <h1>
      <NavLink to={`/movie/${title}`} >{title}</NavLink>
      </h1>
      <img src={`https://image.tmdb.org/t/p/w185${poster}`} alt="Poster-img" />
    </div>
  );
}
