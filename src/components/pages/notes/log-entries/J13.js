import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J13() {
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
          <h4 className="log-entry__title">13. After the Feast</h4>
          <h5 className="log-entry__date">
            <span>4th Day of Alturiak</span>
            <span><i>September 11th, 2022 8pm</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Lancelot<br />
            <b>Quests: </b> Protect Ireena
          </p>

          <p className="log-entry__text">
            <b>6th Day of Altruiak</b><br />
            -Freebird, Elizana and Ireena have been imprisoned <br />
            -Elizana and Freebird meet Umnos, a cleric, in the prison. They escape with Lars after a friendly interaction with one of the guards<br />
            -Lars fucks off to his family<br />
            -Freebird, Elizana and Umnos sneak their way the The Swift Finish to try to brainstorm their next move<br />
            -they go to the burgomasters mansion to try to find Ireena, Elizana scales the wall to enter the second story window. She overhears the guards speaking about them being posted as a trap for the sunseekers and that Izek took Ireena north. <br />
            -head north in an attempt to catch up with them, stop by Watchterhouse. Lady Watcher says that she saw Izek and Ireena heading to the northern gate of the city about an hour ago.<br />
            -party begins to disguise the wagon in the vallaki town center, Umnos stays behind to wait for the repairs, Elizana and Freebird head out of the city towards the north
            <br />
            -Wagon renamed “Sunrise”<br />
            -Ireena is found tied to a tree in the forest surrounded by woods. Freebird and Elizana slay the wolves and free Ireena. Umnos joins the party with the new and improved Sunset.   <br />
 
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J13