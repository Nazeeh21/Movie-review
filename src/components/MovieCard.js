import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function({ title }) {
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
    </div>
  );
}
