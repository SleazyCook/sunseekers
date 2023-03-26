import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J05() {
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
          <h4 className="log-entry__title">5. Welcome to Vallaki</h4>
          <h5 className="log-entry__date">
          <span>20th Day of Hammer</span><br />
          <span><i>June 20th, 2022 7pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird<br />
            <b>Quests: </b> "All Will Be Well!", Tarroka Reading: The Artifact
          </p>

          <p className="log-entry__text">
            -Breakfast at the Blue Water Inn<br />
            -First visit to Town Square (Lukresh Tannery, Odds N Ends, Stefanovich Apothecary, Endless Delights)<br />
            -Blinky's Toys (terror and Ireena dolls)<br />
            -The Swift Finish<br />
            -Return to the Blue Water Inn<br />
            -Rictavio meets the party
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J05