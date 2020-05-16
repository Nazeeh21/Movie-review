import React from 'react'

const IMG_URL = "https://image.tmdb.org/t/p/w185";
export default function DetailCard(props) {
  console.log(props);
  const movie = props.movie_detail
  return (
    <div>
      <h1>title: {movie.title}</h1>
      <h2>IMDB Rating = {movie.popularity}</h2>
      <h2>release-date = {movie.release_date}</h2>
      <p>Review : {movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Poster-img" />
    </div>
  )
}