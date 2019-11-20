import React from 'react'
import { format } from 'date-fns'

const MovieData = props => {
  return (
    <>
      <div className='movieBox'>
        <img
          src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.image}
          alt='movie poster'
        />
        <li className='title'>
          {props.title}
          <br></br>
          <span className='releaseDate'>
            Released on {format(new Date(props.releaseDate), 'LLLL do yyyy')}
          </span>
        </li>
        <li>{props.overview}</li>
      </div>
    </>
  )
}

export default MovieData
