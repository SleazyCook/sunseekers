import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J09() {
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
          <h4 className="log-entry__title">9. Return to Vallaki</h4>
          <h5 className="log-entry__date">
            <span>27th Day of Hammer</span><br />
            <span><i>August 7th, 2022 8pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> None<br />
            <b>Quests: </b> "All Will Be Well!"
          </p>

          <p className="log-entry__text">
            Elizana, German, and Safzira continue their march towards Vallaki from Castle Ravenloft<br />
            Along the way they discover some small trinkets and creepy vibes, fight off some bats<br />
            A magical cloak is discovered and contains more than one magical property. 
            German surmises that one ability of the cloak is that it can be worn with another cloak<br />
            Safzira discovers that the cloaks's appearance changes with her mood
            PCs make it back to Vallaki safely<br />
            Safzira talks to Danika Martikov at the Blue Water Inn, she implies that Ireena has been looking for them and the young priest has come by looking for Safzira <br />
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J09