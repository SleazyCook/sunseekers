import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J01() {
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
          <h4 className="log-entry__title">1. Death House</h4>
          <h5 className="log-entry__date">
            <span>8th Night of Hammer through 9th Morning of Hammer</span>
            <span><i>May 27th, 2022 8pm</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters:</b> Elizana, German, Safzira
            <br />
            <b>Non-Player Characters:</b> Freebird, Lancelot, Viktor Lazlo
            <br />
            <b>Quests: </b> Death House
          </p>

          <p className="log-entry__text">
            A few days after joining Viktor Lazlo's traveling show, the characters slowly start to get to know one another. There is a roguish half-elf/half-human traveling with a Kenku (large humanoid flightless raven) as well as an elf traveling with a halfling.  There is also one terrifying barbarian, still bloodied from  his last fight. The Sunset wagon comes to a stop as the Sunseekers pile out to see two small children, Rose and Thorn, crying for help. The Sunseekers agree to help defeat the monster in their home and save their baby brother Walter.
            <br />
            <br />

            The house is not what it appears.  As they journey deeper into their house, they discover more of its secrets, but they also discover a lonely white dog called Lancelot looking for his owner Gertruda.
            They learn of the Durst family, once the charitable owners of the local Windmill, turned to cultists after the mysterious Strahd arrived in their homeland. Gustav Durst had an affair with the nursemaid Margaret, birthing baby Walter. Gustav eventually committed suicide in his bedroom leaving Margaret to be murdered by Elizabeth and her baby to sacrificed in a bogus cultish ritual. 
            <br />
            <br />

            During this time, the children Rose and Thorn were locked in their room left to starve to death as Strahd turned to cultists to undead monsters forced to haunt the remains of Durst Manor. 
            <br />
            <br />

            While exploring the basement catacombs, the Sunseekers were able to give Rose, Thorn, and Margaret a proper burial by placing their bones in their long-empty coffins. On their way to the deepest depths of the catacombs, the Sunseekers discover a statue of a pale, cloaked figure holding a very real, very magical crystal ball. The owner of the Sunset wagon, Viktor Lazlo, seems to recognize the face of the statue and claims to have accidently activated the crystal ball  - creating the feeling that they are being watched intensely, almost perversely. The halfling and the barbarian agree to cover the crystal ball with some old cloaks and the party moved into the final room, the ritual chamber.  Ghostly chants within the ritual chamber demand a sacrifice so Viktor Lazlo promptly picks up the dog Lancelot and proceeds to take him to the alter & pick up the rusty, bloody ritual knife with his other hand. He seems adamant that this is the only way out of the house alive. The barbarian German beheads Lazlo, saving the dog's life.  This action upsets the spirits within the chamber as they summon a large Flesh Mound with the remains of baby Walter serving as its beating heart. The Barbarian stands in front of the rest of the Sunseekers as they hurl arrows and firebolts at the Mound from across the room. The elf cleric, a pacifist at heart, tried to command the Mound to rest, but ultimately failed forcing the party to end its miserable life freeing baby Walter's remains.  The haunted house then began to collapse around them as they took the remains and fled.
            <br />
            <br />

            Once outside, baby Walter's remains were buried in the stable next door bringing an end to centuries-long curse of Durst Manor. As the party set to return to the Sunset Wagon, they were greeted by a massive basket of fresh fruit, bread, cheese, and wine.  In it a card reads "Welcome to Barovia, signed Count Strahd von Zarovich" The basket is delicious but they can feel Strahd's gaze upon them. 
            <br />
            <br />
            <a href="#">Return to top</a><br /><br />

          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J01