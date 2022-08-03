import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Catalog from '../Catalog.json'
import './Movies.css'



const Movie = () => {
  
  const params = useParams()
  const [movie, setMovie] = useState(Catalog[params.id - 1])

  return (
      <>
    <h1>{movie.title}</h1>
    <img src={movie.image} alt={movie.title}></img>
    <p><strong>Director: </strong>{movie.director}</p>
    <p><strong>Stars:</strong></p>
    {movie.stars.map(star => (
        <ul>
            <li> key={star}</li>
        </ul>
    ))}
    <p><strong>Description: </strong>{movie.description}</p>
    </>
  );
}

export default Movie;