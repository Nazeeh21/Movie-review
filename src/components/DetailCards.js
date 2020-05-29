import React from "react";
import Trailer from "./Trailer";

const IMG_URL = "https://image.tmdb.org/t/p/w780";

export default function DetailCard(props) {
  console.log(props);
  const movie = props.movie_detail;
  return (
    <div
      style={{
        padding: "10rem",
        background: "#02123c"
      }}
    >
      <div
        style={{
          height: "18rem",
          width: "15rem",
          borderRadius: "20px",
          position: "relative"
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            border: "3px solid black"
          }}
          src={`${IMG_URL}${movie.poster_path}`}
          alt="Poster-img"
        />
      </div>
      <div
        style={{
          background: "#010026",
          padding: "3rem",
          color: "white",
          fontFamily: "'Poppins',sans-serif",
          borderRadius: "10px",
          marginTop: "2rem"
        }}
      >
        <Trailer
          style={{
            color: "white"
          }}
          movie_id={movie.id}
        />
        <h1
          style={{
            fontSize: "2rem"
          }}
        >
          {movie.title}
        </h1>
        <h2
          style={{
            fontSize: "1.2rem",
            color: "#7a7a7a"
          }}
        >
          {movie.release_date}
        </h2>
        <h2
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize: "1.8rem"
          }}
        >
          IMDB: {movie.popularity}
        </h2>

        <p
          style={{
            background: "#12113E",
            padding: "0.7rem",
            borderRadius: "10px"
          }}
        >
          Review : {movie.overview}
        </p>
      </div>
    </div>
  );
}
