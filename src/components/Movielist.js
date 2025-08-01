import React from 'react'
import Moviecard from './Moviecard'
import Addmovie from './Addmovie'

function Movielist({movies, setmovies, text, score}) {

  return (
    <> 
    <div className='add'>
      <Addmovie movies={movies} setmovies={setmovies}/>
    </div>
    <div className='content'>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=score).map((el)=><Moviecard el={el}/>).reverse()}
    </div>
    </>
  )
}

export default Movielist
