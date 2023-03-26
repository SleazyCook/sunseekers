import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J15() {
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
          <h4 className="log-entry__title">15. Order of the Silver Dragon</h4>
          <h5 className="log-entry__date">
            <span>8th Day of Alturiak</span><br />
            <span><i>October 10th, 2022</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, Umnos, Zoro, Safzira<br />
            <b>Non-Player Characters: </b> Kasimir, Viktor, FreeBird, Ireena <br />
            <b>Quests: </b> Protect Ireena
          </p>

          <p className="log-entry__text">
            <b>[Midnight Club]</b><br />
            –Safzira and Zoro learn about Argonvost (legendary dragon) that was killed by Strahd while guarding the Amber Temple. They have been transformed into revanants due to Vladimir Hornguards intense hatred. They ask the party to help ease the hatred. <br /><br />

            <b>[Mystery Inc]</b><br />
            -Umnos, Elizana, FreeBird and Ireena awaken, tied up and surrounded by witches. <br />
            -Party is able to free themselves from their binds without the witches taking notice. <br />
            - When communication with the witches fails, the party engages them in combat. <br />
            - The witches retreat when they notice Ireena is with them. <br />
            - Ireena items: wax, lead ingot, clay, 1 healing potion<br />
            -Elizana items: salt, pepper, abacus, smelling salts, 3 healing potions<br />
            -Umnos: 3 healing potions


        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J15