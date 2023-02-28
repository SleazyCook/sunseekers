import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J07() {
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
          <h4 className="log-entry__title">7. SHowdown at the Old Mill</h4>
          <h5 className="log-entry__date">
            <span>24th Day of Hammer</span>
            <span><i>July 10th, 2022 7pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird<br />
            <b>Quests: </b> Children of Vallaki, A Message for Cyrus Belview
          </p>

          <p className="log-entry__text">
            Elizana sneaks into the window on the 3rd floor sneaking around and rescuing 5 children from crates and attic<br />
            German and Safzira casually distract Bella on the first floor<br />
            Elizana frees a 6th child and is attacked by Ophelia, a night hag on the second floor (bone grinding floor)<br />
            German grapples Ophelia and he presses her against the grinder<br />
            Elizana and Safzira help grind Ophelia into bone dust<br />
            A third hag rescues Bella and runs into the woods<br />
            Elizana discovers the remains of the 7th child and 60 gp<br />
            German confronts the hags in the woods<br />
            The hags attack, leaving the party incapacitated<br />
            The party wakes up as rats under Morgantha's spell compelled to deliver a letter to Cyrus Belview, Strahd's loyal mongrelfolk servant,<br />
            Once delivered, the party returns to their humanoid forms (with their gear and 1 hit point each) deep within the castle 
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J07