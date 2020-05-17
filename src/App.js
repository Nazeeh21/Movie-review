import React, { useEffect, useState } from "react";
import "./styles.css";
import MovieCard from "./components/MovieCard";
import { Route, Switch } from "react-router-dom";
import { getMovies } from "./controllers/MovieControllers";
import MovieDetails from './components/MovieDetails';


export default function App() {
  const [movieSearch, setMovieSearch] = useState("")

  function handleChange(event) {
    const value = event.target.value;
    setMovieSearch(value)
  }

  function handleSubmit(event) {
      event.preventDefault();
      const submitMovie = event.target.mName.value;
      console.log(submitMovie);
      
      window.location.href='/movie/' + submitMovie;
      
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <p>Search for Movie: {movieSearch}</p>
      <form onSubmit={handleSubmit} action={`/movie/${movieSearch}`}>
        <input
        onChange={handleChange}
        value={movieSearch}
        name="mName"
        placeholder="Search Movies" />
        <button type="submit">Search</button>
      </form>
      
   
    <Switch>
      <Route path="/" exact>
        <div className="App">
          {movies.length === 0
            ? "Loading"
            : movies.map(movie => (
                <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path} />
              ))}
        </div>
      </Route>
      
      <Route path="/movie/:title" exact component={MovieDetails} />
    </Switch>
    </div>
  );
}
