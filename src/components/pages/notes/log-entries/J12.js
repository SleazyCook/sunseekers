import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J12() {
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
          <h4 className="log-entry__title">12. Mad Mage and the Feast of St. Andral</h4>
          <h5 className="log-entry__date">
            <span>2nd Day and 3rd Day of Alturiak</span>
            <span><i>September 4th, 2022 8pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Vasili<br />
            <b>Quests: </b> Mad Mage in the Mountains, Bones of St. Andral
          </p>

          <p className="log-entry__text">
            <b>2nd Day of Alturiak</b><br /><br />
            -Met the Mad Mage in the Mountains who is revealed to be Victor Vallakovich as an old man traveling back in time<br />
            -The Old mage agrees to join the party provided he can stay outside of Vallaki for the time being<br />
            -Agrees to write a Greater Restoration spell (which will take him one day)<br />
            -Before retiring for at least 24 hours of rest, the Mage casts a Greater Restoration spell on the orphan Millovaj at the Vallaki Vistani Camp<br />
            -Milivaj wakes up admitting he stole the bones for the Coffin Maker, but wanted to steal them back after getting paid. <br />
            -The Sunseekers rest for the night<br /><br />

            <b>3rd Day of Alturiak</b><br /><br />
            -While the Mad Mage is resting, Kasimir is tasked with sending a pigeon when he wakes<br />
            -Milivaj follows the Sunseekers to the Coffin Maker’s Shop<br />
            -Coffin Makers says that the bones have left the city and there are vampires within his shop
            -The Sunseekers fight 6 vampire spawns on the second floor of the Coffin Maker’s shop <br />leaving German the Barbarian and Freebird severely. Two vampire spawn survive the second floor and continue down.<br />
            -After healing up a little, Milivoj and Henrik the Coffin Maker are discovered dead, ripped apart by the vampire spawn who have escaped the building under the cover of severe overcast weather. Screams can be heard on the West side of town.	<br />
            -Halfway to St. Andral’s Church Vasili runs into the party begging them to take Ireena out of town.<br />
            -A horde of skeletons, vampires, and zombies slaughter guards and commoners throughout the streets eventually surrounding the Sunseekers<br />
            -Anastrasya, one of Strahd’s brides screams “I’m tired of that bitch!” to Vasili, who in turn transforms into Strahd and beheading Anastrasya with his bare hands<br />
            -Strahd proceeds to destroy the undead horde before apologizing to Ireena for the trouble<br />
            -Strahd pleads with Ireena that he and Vasili truly are the same person at heart. <br />
            -The Sunseekers flee Strahd’s rage as she turns away from him<br />
            -Returning to the Blue Water Inn, Danika and her family are cleaning up the blood and bodies, including one of her sons<br />
            -Freebird gives one of his feathers to Danika while Safzira helps clean up the taproom.
          
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J12