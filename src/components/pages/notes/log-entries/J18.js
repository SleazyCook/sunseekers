import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J18() {
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
          <h4 className="log-entry__title">18. Cold Deep South</h4>
          <h5 className="log-entry__date">
            <span>18th Morning of Hammer through 19th Evening of Hammer</span><br />
            <span><i>November, 14th, 2022</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Zoro, Safzira<br />
            <b>Non-Player Characters: </b> Viktor, Kasimir, Ser Erich<br />
            <b>Quests: </b> The Last Hunting Trip
          </p>

          <p className="log-entry__text">
            <b>[Midnight Club]</b><br />
            -party is traveling with Viktor, Kasimir and Ser Erich toward the amber temple <br />
            -he tells party about a flying beast that he wants to hunt<br />
            -party fights a bunch of animated scarecrows<br />

        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J18