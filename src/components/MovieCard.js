import React from "react";
import { NavLink } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w780";

export default function({ title, poster }) {
  return (
    <div
      style={{
        border: "5px solid #1890FF",
        borderRadius: "10px",
        width: "70%",
        margin: "auto",
        height: "70%",
        position: "relative"
      }}
    >
      <h1>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            position: "absolute",
            top: "70%",
            left: "10%",
            fontSize: "1.6rem",
            fontFamily: "'Teko', sans-serif",
            zIndex: "2"
          }}
          to={`/movie/${title}`}
        >
          {title}
        </NavLink>
      </h1>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(to bottom,rgba(255,255,255,0%),rgba(0,0,0,70%))"
        }}
      />
      <img
        style={{ height: "100%", width: "100%" }}
        src={`${IMG_URL}${poster}`}
        alt="Thumbnail-can't-rendered"
      />
    </div>
  );
}
