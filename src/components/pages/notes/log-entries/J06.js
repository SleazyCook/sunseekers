import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J06() {
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
          <h4 className="log-entry__title">6. Festival of the Blazing Sun</h4>
          <h5 className="log-entry__date">
            <span>21st Day of Hammer</span>
            <span><i>July 3rd, 2022 7:30pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird<br />
            <b>Quests: </b> "All Will Be Well!", Tarroka Reading: The Artifact, Festival of the Blazing Sun, Children of Vallaki
          </p>

          <p className="log-entry__text">
            <b>21st Day of Hammer</b><br /><br />
            Visit to the Cracked Anvil, 1 bar of silver and 15gp to silver one weapon<br />
            Hunt wolves and create bracers to sell for 1gp per pair<br />
            Meeting with Rictavio at the Swift Finish<br />
            -real name Rudolph Van Richten, monster hunter<br />
            -offered insight to card readings<br />
            -offers to investigate stuff for party<br />
            -offers topographical map (see maps-and-handouts )<br /><br />

            <b>22nd Day of Hammer, Festival of the Blazing Sun</b><br /><br />
            Guards command the party to pass out flyers<br />
            St. Andral's Church and met the two priests<br />
            St. Andral's Orphanage, Claudia Belasco, Vladislav (cards), lizard boy, hair pulling girl, 10 yr old Szvolt want to roam free outside<br />
            Festival of the Blazing Sun, rain ruins festival<br />
            -Lars laughs, is dragged through the street by the Baron's horse<br />
            -Elizana (in child's disguise) calls out the Baron and her group of children is sent to the stocks (Elizana sneaks away)<br />
            -German challenges Izek to distract the guards as Saf, Elizana, and Free Bird free the children.<br />
            -Saf and Free Bird sneak the children out of Vallaki<br />
            -German is incapacitated by Izek and brought back to the Burgomaster's mansion while Elizana sneaks behind silently observing<br/><br />

            <b>23rd Day of Hammer</b><br /><br />
            Saf talks to Danika Martikov at the Blue Water Inn,  asked about Elizana, don't tell anyone where the party is<br />
            Saf runs into Ireena, who has begun courting Vasili, and Elizana.<br />
            -Elizana talks to the Baron inquiring about missing children and the barbarian, both issues are dismissed by the Baron<br />
            -German and Safzira adopt Vladislav (Now Ace) <br />
            Elizana shows headmistress Claudia Belasco the windmill effigy. She fearfully tells her to avoid the windmill coven as they kidnap and murder children to create dream pastries.
            -The Sunseekers turn their attention immediately to head to the Mill and save whatever is left of the children  
        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J06