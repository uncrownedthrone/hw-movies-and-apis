import React, { useState, useEffect } from 'react'
import MovieData from './MovieData'
import axios from 'axios'

const MovieAPIInfo = () => {
  const [movies, setMovies] = useState([])
  const getMovieData = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=release_date.desc&api_key=17cb5378f871124dfc852a9d103647e3`
    )
    console.log(resp)
    setMovies(
      resp.data.results.sort((a, b) => {
        if (a.title > b.title) {
          return 1
        } else if (a.title < b.title) {
          return -1
        } else {
          return 0
        }
      })
    )
    // const data = await resp.json() <-- not needed becuase axios
    // ASSUMES that the data it's getting back is json unless
    // you tell it otherwise. fetch doesn't assume anything
  }

  useEffect(() => {
    getMovieData()
  }, [])

  return (
    <>
      <h1>BEST MOVIES of 1989</h1>
      <div>
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
