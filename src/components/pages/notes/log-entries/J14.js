import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J14() {
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
          <h4 className="log-entry__title">14. Umnos in Ravenloft</h4>
          <h5 className="log-entry__date">
            <span>7th Day of Altruiak</span>
            <span><i>June 20th, 2022 7pm</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, Umnos, Zoro, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Kasimir, Viktor<br />
            <b>Quests: </b> Protect Ireena
          </p>

          <p className="log-entry__text">
            <b>7th Day of Altruiak (Elizana, Umnos, Freebird, Ireena)</b><br/>
            -(Flashback during long rest) Umnos does some maintenance to Elizanas crossbow adding a +1 to all attack rolls and +1 to damage.<br/>
            -Party bumps into Viktor Lazlo on the road. Elizana shoots at Viktor Lazlo and Umnos casts Sacred Flame. Viktor continues on the road as the party passes him. <br/>
            -As the party continues they encounter a skeleton on a skeletal horse. They ride past the creature. <br/>
            -Party arrives at Ravenloft. Party ascends the stairs and finds the throne room. On the throne the party finds a dagger and a crumpled note. <br/>
            -Long dark shadow appears behind Elizana. After reading the note the party moves into a room off of the throne room <br/>
            - Party meets a man, Umnos can tell this man is not alive, who is ceaselessly scribbling <br/>
            -The man takes a liking to Elizana and tells her of a lost holy relic (holy symbol of ravenkind) that was last seen in western barovia.<br/>
            -Party finds a old dining room, they all have a vision of happier times<br/>
            -Party goes into another room with a blazing fire, there is a portrait that looks exactly like Ireena<br/>
            -(Elizana books) the green book of life, the value of leisure, halfling pipe weed and investigation.<br/>
            - 108 gold pieces found, split between Umnos, Freebird, Elizana and Ireena (28 pieces each). The party mysteriously falls asleep.<br/><br />

            <b>7th Day of Altruiak (Safzira) </b><br/>
            -Viktor joins the party, they begin to head to the Amber Temple<br/>
            -Party stumbles across a dead body, a wolf hunter recently killed by dire wolves. Safzira loots the body and finds 2 gold pieces and a healing potion. She has Kas dig a hole for a proper burial <br/>
            -Kas grows frustrated digging a hole with a crowbar so they abandon the task. <br/>
            -Party comes across a large abandoned mansion, Argonvostholt. <br/>
            -Zoro and Safzira explore, Viktor sleeps, Kas is on watch<br/>
            -Zoro encounters a smoke mephit and slays the creature after Saf fails to cast Charm Person successfully. <br/>
            -Soot covered socks (Safzira)<br/>
            -Safzira encounters two phantom warriors in the corridor.<br/>
            -The phantom warriors disappear and a figure appears behind Zoro and says, “Why do the living always disturb the dead”.

        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J14