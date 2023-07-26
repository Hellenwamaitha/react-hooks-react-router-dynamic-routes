import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow(props) {
  // Use the useParams hook to get the movieId
  let { movieId } = useParams();

  // Convert movieId to a number (as it will be a string by default from the params)
  movieId = Number(movieId);

  // Find the movie by its ID using the movies prop
  const movie = props.movies.find(m => m.id === movieId);

  // If no movie is found, display an appropriate message
  if (!movie) {
    return <div>Sorry, movie not found!</div>;
  }

  // Display the movie details
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieShow;
