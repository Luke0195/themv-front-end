import React, { useState } from 'react'
import MovieStars from '../MovieStars'
export function MovieScore () {
  const score = 33
  const count = 20
  return (
    <div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="dsmovie-score-count">{count} avaliações</p>
</div>
  )
}
