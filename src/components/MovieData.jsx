import React from 'react'

const MovieData = props => {
  return (
    <>
      <img
        src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.image}
        alt='movie poster'
      />
      <li>{props.title}</li>
      <li>{props.overview}</li>
    </>
  )
}

export default MovieData
