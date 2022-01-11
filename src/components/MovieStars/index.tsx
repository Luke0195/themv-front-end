import React from 'react'
import { ReactComponent as StarEmpty } from '../../assets/img/emptyStart.svg'
import { ReactComponent as StarFull } from '../../assets/img/fullStart.svg'
import { ReactComponent as StarHalf } from '../../assets/img/halfStart.svg'
import './styles.css'

export default function MovieStarts () {
  return (
  <div className="dsmovie-stars-container">
    <StarFull />
    <StarFull />
    <StarFull />
    <StarHalf />
    <StarEmpty />
</div>

  )
}
