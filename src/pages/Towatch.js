import React from 'react';
import MovieItem from '../components/MovieItem';

const ToWatched = ({ movies, toggleWatch }) => {
  return (
    <div className="md:mt-24 mt-16">
      <h1 className="text-center text-2xl mb-8">To Watch Movies</h1>
      {movies.length
        ? movies.map((movie) =>
            movie.watched === false ? (
              <MovieItem
                key={movie.imdbID}
                movie={movie}
                toggleWatch={toggleWatch}
                watched={false}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default ToWatched;
