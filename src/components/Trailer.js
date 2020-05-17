import React, { useState, useEffect } from "react";
import axios from "axios";


const TRAILER_BASE_LINK = "https://www.youtube.com/watch?v=";
const API_KEY = "c9a1dae6cf28efb4ba69f43ecf6f4729";

export default function Trailer({ movie_id }) {
  const [trailer, setTrailer] = useState([""]);

  const [trailerText, setTrailerText] = useState("")

  useEffect(() => {
    getTrailer().then(data => setTrailer(data));
    trailer === null ? setTrailerText("Trailer not available") : setTrailerText("Trailer");
  }, []);

  const getTrailer = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      {
        params: {
          api_key: API_KEY,
          language: "en-US"
        }
      }
    );
    const trailer_key = response.data.results[0].key;
    console.log(response.status);
    console.log(trailer_key);
    return trailer_key;
  };

  return <div>
    
    <a 
    // style={{
    //   color: "blue",
    //   textDecoration: "underline",
    // }} 
    // onClick={()=> window.open(TRAILER_BASE_LINK + `${trailer}`, "_blank")} 
    href={TRAILER_BASE_LINK + `${trailer}`}
    >{trailerText}</a>
     </div>;
}
// "https://api.themoviedb.org/3/movie/" + {movie_id} + "/videos?api_key=c9a1dae6cf28efb4ba69f43ecf6f4729&language=en-US"
// EXAMPLE_URL = "https://api.themoviedb.org/3/movie/271110/videos?api_key=c9a1dae6cf28efb4ba69f43ecf6f4729&language=en-US"
