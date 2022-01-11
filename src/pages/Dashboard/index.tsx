import React from 'react'
import Pagination from '../../components/Pagination'
import MovieStar from '../../components/MovieStars'
import MovieCard from '../../components/MovieCard'
import './styles.css'
export default function Dashboard () {
  return (
  <div className="dashboard-container">
    <Pagination/>
    <div className="container">

    <div className="row">

    <div className="col-ms-6 col-lg-4 col-xl-3">
          <MovieCard/>
      </div>
      <div className="col-ms-6 col-lg-4 col-xl-3">
          <MovieCard/>
      </div>
      <div className="col-ms-6 col-lg-4 col-xl-3">
          <MovieCard/>
      </div>
      <div className="col-ms-6 col-lg-4 col-xl-3">
          <MovieCard/>
      </div>

    </div>
    </div>
  </div>
  )
}
