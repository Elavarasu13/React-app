import React from 'react'
import { movies } from './data/movies';
import { Movie } from './Movie';
import './movies.css';
const fetchMovieData = () =>{
    return movies;
}

const  MovieComponent = () =>
{
    const movieData = fetchMovieData();
    
    return(
        <div ClassName="container">
            <h1>Movies</h1>
            <ul className='movie-list'> 
            {
                movieData.map((movie) => (
                    // <li className='movies' key={movie.id}>
                    //   <img src = {movie.poster}  alt ={movie.id}/>
                    //   <p>{movie.name} by {movie.director} was released on {movie.year}</p>
                    //   <p>Rating : {movie.rating}</p>
                    // </li>
                    <Movie  key={movie.id} movie = {movie}/> // using values by props

                ))
            }

            </ul>
        </div>
    )
}

export default MovieComponent;