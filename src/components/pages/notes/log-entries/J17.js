import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J17() {
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
          <h4 className="log-entry__title">17. Ez and the Tome of Strahd</h4>
          <h5 className="log-entry__date">
            <span>10th Morning of Alturiak</span><br />
            <span><i>November 7th, 2022 7pm</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Umnos, Elizana, Zoro, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Kasimir, Viktor, Ser Erich<br />
            <b>Quests: </b> Dream Pastries, Children of Vallaki, "All Will Be Well!"
          </p>

          <p className="log-entry__text">
            <b>[Midnight Club]</b><br />
            -party agrees to travel with Ser Erich Norinthal to hunt a massive goat with him<br />
            -on the road to the amber temple, the party encounters a person on all fours and numerous twig blights<br />
            -when Safzira’s attempts to reason with this person fall on deaf ears, a battle ensues.<br /><br />

            <b>[Mystery inc]</b><br />
            -party witnesses Beucephalus and they quickly evacuate the tower<br />
            - the party along with the mysterious woman that saved them go back into the room where they encountered the witches to rest<br />
            -the woman (Ez) tells them that she had come for the book and asks the party if she can make a copy of it<br />
            -she tells them that she has a place they can meet her after they leave Ravenloft, west of vallaki near a lake, she will leave a note under an interesting rock on the path to the tower<br />
            -refused to allow her to copy book, she disappeared and took the book<br />
            -party continued to look for missing party members (Lancelot and Ireena)<br />
            -bumped into Echer, one of Strahds consorts. He told the party that he was once an adventurer as well (bard). Advice to party, make sure you're useful.<br />
            -party continued exploring. On the balcony located in the church of Ravenloft, party encounters two shadowy figures sitting on the throne overlooking the church. 
            -Elizana: The Wilting Sun (book)<br />

        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J17