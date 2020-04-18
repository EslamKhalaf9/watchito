import React from 'react';
import { navigate } from '@reach/router';

function MovieCard({ movie, addFilm }) {
  const handleClick = (id) => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=4f078e44`)
      .then((res) => res.json())
      .then((data) => {
        data.watched = false;
        data.favorite = false;
        addFilm(data);
        navigate(`/movie/${id}`);
      });
    console.log(id);
  };
  return (
    <div className="p-5 w-4/5 mx-auto shadow-xl my-2 md:w-1/3 md:p-1 md:max-w-md md:mx-0 md:border rounded">
      <img
        src={movie.Poster}
        alt={movie.Title + 'Poster'}
        className=" mx-auto md:w-full"
      />
      <button
        to={'/movie/' + movie.imdbID}
        className="text-center text-xl mt-1 block cursor-pointer mx-auto md:my-4 md:text-2xl"
        onClick={() => handleClick(movie.imdbID)}
      >
        {movie.Title} ({movie.Year})
      </button>
    </div>
  );
}

export default MovieCard;
