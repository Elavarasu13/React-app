//object destructuring ({movie})
//props 
export const Movie = ({movie}) =>{
    return(
        <li className='movies' key={movie.id}>
          <img src = {movie.poster}  alt ={movie.id}/>
          <p>{movie.name} by {movie.director} was released on {movie.year}</p>
          <p>Rating : {movie.rating}</p>
        </li>
    )
}