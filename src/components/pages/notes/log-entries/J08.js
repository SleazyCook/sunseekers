import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J08() {
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
          <h4 className="log-entry__title">8. Rats in Castle Ravenloft</h4>
          <h5 className="log-entry__date">
            <span>26th Day of Hammer</span><br />
            <span><i>July 31st, 2022 8:30pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Prisoner<br />
            <b>Quests: </b> A Message for Cyrus Belview
          </p>

          <p className="log-entry__text">
            The party shift from rat to human form after handing over Morgantha's mysterious letter<br />
            The party finds a small trashy room, a great hall of bones, a kitchen (steel pot mimic still alive), old wine barrel room, deep southern dungeon (saved an old man), and Strahd's dining hall (organ music)<br />
            Strahd casually talks to the party, kills the old man, and gives the halfling a pair of pristine white satin gloves<br />
            German finds and dons a set of +1 plate armor (red)<br />
            Following Strahd's directions, the Sunseekers leave the castle<br />
            German returns inside the castle for one last look and the party follows shortly behind<br />
            Through the Hall of Faith, each Sunseeker received inspiration for various reasons (German - combat ability, Elizana - curiosity, Safzira - promiscuity)<br />
            The Sunseekers leave the castle for real this time looking back to see the spires looming over them from dizzying heights 
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J08