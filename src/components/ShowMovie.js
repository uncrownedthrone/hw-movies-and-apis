import React, { useState, useEffect } from 'react'
import MovieData from './MovieData'

const MovieAPIInfo = () => {
  const [movies, setMovies] = useState([])
  const getMovieData = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=17cb5378f871124dfc852a9d103647e3`
    )
    const data = await resp.json()
    setMovies(data.results)
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <>
      <h1>BEST MOVIES of 1989</h1>
      <ul>
        {movies.map(movie => {
          return (
            <MovieData
              key={movie.id}
              image={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          )
        })}
      </ul>
    </>
  )
}

export default MovieAPIInfo
