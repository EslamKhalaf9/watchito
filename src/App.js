import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Watched from './pages/Watched';
import ToWatch from './pages/Towatch';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Data from './data/movies.json';
import { Router } from '@reach/router';

function App() {
  const [movies, setMovies] = useState(Data);

  const [film, setFilm] = useState({});

  const addFilm = (f) => {
    setFilm(f);
  };
  const toggleFavorite = (id) => {
    let newList = [];
    newList = movies.map((movie) => {
      if (movie.imdbID === id) {
        movie.favorite = !movie.favorite;
      }
      return movie;
    });
    setMovies(newList);
  };
  const toggleWatch = (id) => {
    console.log('clicked');
    let newList = [];
    newList = movies.map((movie) => {
      if (movie.imdbID === id) {
        movie.watched = !movie.watched;
        movie.favorite = false;
      }
      return movie;
    });
    setMovies(newList);
  };
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4">
        <Router>
          <Home path="/" />
          <Watched
            path="/watched"
            movies={movies}
            toggleFavorite={toggleFavorite}
            toggleWatch={toggleWatch}
          />
          <ToWatch path="/towatch" movies={movies} toggleWatch={toggleWatch} />
          <Movie path="/movie/:movieId" movies={movies} film={film} />
          <Search path="/search" movies={movies} addFilm={addFilm} />
        </Router>
      </div>
    </div>
  );
}

export default App;
