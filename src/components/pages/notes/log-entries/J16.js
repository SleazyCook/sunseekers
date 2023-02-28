import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J16() {
  return (
    <div>

      <Header />
      <Navigation />
      
      <div className="u-center-text u-margin-bottom-big">
        <Link className="log-entry__link" to="/notes/adventure-log">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Adventure Log</span>
          </h2>
        </Link>
      </div>

        <div className="log-entry__main">
          <h4 className="log-entry__title">16. Heart of Sorrow</h4>
          <h5 className="log-entry__date">
            <span>9th Day of Alturiak</span>
            <span><i>October 25th, 2022</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, Umnos<br />
            <b>Non-Player Characters: </b> FreeBird, Ireena<br />
            <b>Quests: </b>Tarroka Reading: The Transmuter
          </p>

          <p className="log-entry__text">
            <b>[Mystery Inc]</b><br />
            -The Sunseekers battle the sneaky and deadly Volenta, a bride of Strahd, in the Heart of Sorrow. <br />
            -A mysterious Vistana woman helps defeat Volenta at the base of the tower<br />
            -Elizana scales the tower and discovers the Tome of Strahd, as prophesied by Madame Eva's Tarroka reading.<br />
            -As the Sunseekers regroup at the top of the tower, bloodied from the battle with Volenta, a flaming horse is seen flying straight toward them.<br />
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J16