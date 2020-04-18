import React from 'react';
import { Link } from '@reach/router';
import { MdFavoriteBorder, MdFavorite, MdClear, MdDone } from 'react-icons/md';

function MovieItem({ movie, toggleFavorite, toggleWatch, watched }) {
  return (
    <div className="flex justify-between px-2 content-center border border-solid border-gray-100 py-2 md:max-w-3xl mx-auto">
      <h2>
        <Link to={'/watchito/movie/' + movie.imdbID}>{movie.Title}</Link>
        <span className="text-gray-600 mx-2 md:inline hidden">
          ({movie.Year})
        </span>
      </h2>
      <div className="options flex content-center justify-center">
        {watched ? (
          <button
            onClick={() => toggleFavorite(movie.imdbID)}
            className="text-red-700 mx-1 flex items-center text-3xl"
          >
            {movie.favorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        ) : (
          <button
            onClick={() => toggleWatch(movie.imdbID)}
            className="text-green-700 mx-1 flex items-center text-3xl"
          >
            <MdDone />
          </button>
        )}
        <button
          onClick={() => toggleWatch(movie.imdbID)}
          className="text-red-700 mx-1 flex items-center text-3xl"
        >
          <MdClear />
        </button>
      </div>
    </div>
  );
}

export default MovieItem;
