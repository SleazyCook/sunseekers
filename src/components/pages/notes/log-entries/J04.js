import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J04() {
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
          <h4 className="log-entry__title">4. Dream Pastries at the Old Mill</h4>
          <h5 className="log-entry__date">
            <span>18th Morning of Hammer through 19th Evening of Hammer</span>
            <span><i>June 20th, 2022 7pmJune 13th, 2022 7pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Lancelot<br />
            <b>Quests: </b> Dream Pastries, Children of Vallaki, "All Will Be Well!"
          </p>

          <p className="log-entry__text">
            -strahd zombies cross the road<br />
            -Black Carriage, walked away from it<br />
            -dire wolves attack the Sunset<br />
            -Old Mill, effigies, Bella offers free pastries (drugs!)<br />
            -Orphanage quest from from Bella at the Old Mill<br />
            -wolves, Viktor Lazlo attack<br />
            -Vallaki Gate, Orientation, and Burgomaster Meet & Greet ("All Will Be Well") 
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J04