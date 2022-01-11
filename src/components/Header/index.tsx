import React from 'react'
import logo from '../../assets/img/Vector.svg'
import './styles.css'

function Header () {
  return (
      <header>
        <nav>
            <div className="container">
               <h1> DSMovie</h1>
               <a href="https://github.com/Luke0195">
                 <img src={logo} alt="github-logo"/>
                <span>/Luke0195</span>
               </a>
            </div>
        </nav>
      </header>
  )
}

export default Header
