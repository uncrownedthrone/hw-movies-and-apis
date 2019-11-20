import React, { useState, useEffect } from 'react'
import MovieData from './MovieData'

const MovieAPIInfo = () => {
  const [movies, setMovies] = useState([])
  const getMovieData = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=release_date.asc&api_key=17cb5378f871124dfc852a9d103647e3`
    )
    const data = await resp.json()
    console.log(data)
    setMovies(data.results)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <>
      <h1>BEST MOVIES of 1989</h1>
      <div className='all'>
        <ul>
          {movies.map(movie => {
            return (
              <MovieData
                key={movie.id}
                image={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default MovieAPIInfo
