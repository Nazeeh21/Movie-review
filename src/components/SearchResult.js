import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";


const API_KEY = "c9a1dae6cf28efb4ba69f43ecf6f4729";

function SearchResult({ match }) {
    // console.log(match.params.title);

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getSearchResult().then(data => setMovies(data));
    }, []);

    const getSearchResult = async () => {
        const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
            params: {
                 api_key: API_KEY,
                language: "en-US",
                //   query: "avengers endgame",
                query: `${ match.params.title }`,
                page: 1,
                include_adult: true
            }
        }
    );
        console.log(response.status);
    console.log(response.data.results);
    return response.data.results;
  };

  var [loadingText, setLoadingText] = useState("Loading");
  
  setTimeout(() => {
      setLoadingText("Sorry! Can't fetch data")
  }, 5000);


  return (
    <div>
        {movies.length === 0 ? loadingText :

            // <DetailCards movie_detail = {movies[0]} />
        movies.map(movie => (<MovieCard 
            key={movie.id}
            title={movie.title}
            poster = {movie.poster_path}/>))
        }
        
    </div>
  )

}
// key={movie.id} title={movie.title} poster={movie.poster_path}

export default SearchResult;