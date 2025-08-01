import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars';

function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name===params.name)[0];
    console.log(movie)
  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.posterurl} />
      <p>{movie.description}</p>

      <ReactStars
  count={5}
  
  size={24}
  color2={'red'} 
  edit={false}
  value={movie.rating} />
    </div>
  )
}

export default Trailer
