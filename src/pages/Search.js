import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import MovieCard from '../components/MovieCard';

const API_PATH = 'https://www.omdbapi.com/';
const API_KEY = '4f078e44';

function Search({ addFilm }) {
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([
    {
      Title: 'Batman v Superman: Dawn of Justice',
      Year: '2016',
      imdbID: 'tt2975590',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
      Title: 'Batman Begins',
      Year: '2005',
      imdbID: 'tt0372784',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    },
    {
      Title: 'Batman',
      Year: '1989',
      imdbID: 'tt0096895',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
    },
    {
      Title: 'Batman Returns',
      Year: '1992',
      imdbID: 'tt0103776',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg',
    },
    {
      Title: 'Batman Forever',
      Year: '1995',
      imdbID: 'tt0112462',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
  ]);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, 'Searching...');
    fetch(API_PATH + '/?s=' + title + '&apikey=' + API_KEY)
      .then((res) => res.json())
      .then((data) => setResults(data.Search));
  };
  let movies = results.filter((res) => res.Type === 'movie');
  return (
    <div className="md:mt-24 mt-16">
      <form
        className="flex flex-col justify-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="EX: joker"
          className="border p-2 mx-2 rounded md:w-3/5"
          value={title}
          onChange={handleChange}
        />
        <button className="bg-blue-500 mx-2 text-white mt-2 p-2 rounded md:mt-0 md:w-1/5 md:p-4">
          Search <MdSearch className="inline text-xl" />
        </button>
      </form>
      <div className="results mt-10 flex flex-col justity-center md:flex-row md:flex-wrap">
        {movies.length
          ? movies.map((movie) => <MovieCard movie={movie} addFilm={addFilm} />)
          : null}
      </div>
    </div>
  );
}

export default Search;
