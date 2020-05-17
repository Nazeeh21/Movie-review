import React from 'react'
import Trailer from './Trailer'

const IMG_URL = "https://image.tmdb.org/t/p/w780";


export default function DetailCard(props) {
  console.log(props);
  const movie = props.movie_detail
  return (
    <div>
      <h1>title: {movie.title}</h1>
      <h2>IMDB Rating = {movie.popularity}</h2>
      <h2>release-date = {movie.release_date}</h2>
      <p>Review : {movie.overview}</p>
      <Trailer movie_id = {movie.id} />
      <img  style={{ 
            padding: "0 10%",
            width: "80%"
         }} src={`${IMG_URL}${movie.poster_path}`} alt="Poster-img" />
    </div>
  )
}


