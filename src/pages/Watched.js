import React from 'react';
import MovieItem from '../components/MovieItem';

const Watched = ({ movies, toggleFavorite, toggleWatch }) => {
  return (
    <div className="md:mt-24 mt-16">
      <h1 className="text-center text-2xl mb-8">Watched Movies</h1>
      {movies.length
        ? movies.map((movie) =>
            movie.watched ? (
              <MovieItem
                key={movie.imdbID}
                movie={movie}
                toggleFavorite={toggleFavorite}
                toggleWatch={toggleWatch}
                watched={true}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default Watched;
