import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J11() {
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
          <h4 className="log-entry__title">11. Bones of St. Andral</h4>
          <h5 className="log-entry__date">
            <span>30th Day of Hammer</span>
            <span><i>August 28th, 2022 8pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Ireena, Kasimir, Rictavio, and Vasili<br />
            <b>Quests: </b> "All Will Be Well!", Bones of St. Andral, Strange Lights, Mage in the Mountains
          </p>

          <p className="log-entry__text">
            <b>30th of Hammer</b><br /><br />
            Safzira and Elizana seek a healer for the catatonic orphan Millovaj<br />
            Vistana Arabelle may be able to help but her father insists on her rest after her return to camp<br />
            Priests are offering their thoughts and prayers over Millovaj<br />
            Ireena and Vasili take the party for Ice cream before moving to the swift finish to talk about private matters<br />
            -Vasili will talk to Lady Wachter about allowing Vistani into town to assist with the takeover<br />
            -Safzira tells Ireena that the Keepers of the Feather are real and may help them down the road<br />
            -a journey to the Amber Temple will happen with the dusk elf Kasimir
            Sunseekers investigate the lights coming from the Burgomaster's attic at night<br />
            -Saf'z familiar uses morse code to communicate with the Burgomaster's son through the window<br />
            -Saf is invited up to talk to Victor about his interest in mastering a Greater Restoration spell and Teleportation Circle<br />
            -Victor says there might be a Mage in the mountains to the north who knows these spells<br /><br />

            <b>1st of Alturiak</b><br /><br />
            The Sunseekers team up with Rictavio to put on a show. Rictavio's tiger draws a crowd and Elizana sneakily puts the catatonic child into the human canon and they shoot him out of town. Free Bird uses feather fall on the child to safely descend the child from the air into the Vistani camp. <br />
            Arabelle attempts her first Greater Restoration spell and fails. <br />
            The Sunseekers travel to the Mountains to the North in search of the rumored Mad Mage. <br />
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J11