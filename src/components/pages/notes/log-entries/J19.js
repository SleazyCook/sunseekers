import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J18() {
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
          <h4 className="log-entry__title">19. The Brazier Room</h4>
          <h5 className="log-entry__date">
            <span>18th Morning of Hammer through 19th Evening of Hammer</span><br />
            <span><i>March 25th, 2023 5:30pm</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, Umnos<br />
            <b>Non-Player Characters: </b> Freebird<br />
            <b>Quests: </b> n/a
          </p>

          <p className="log-entry__text">
            As Umnos and Elizana approach the throne chairs on the Ravenloft church balcony, they see two zombies dressed as Anastrasya and Volenta, Strahd’s recently departed brides. Strahd appears behind Umnos and politely requests that one Sunseeker die in exchange for their involvement in the loss of his brides. They refuse and make a run for the front door of the castle. <br /><br />

            Elizana makes it to the doors as she is surrounded by living gargoyles, small red dragons, and an armored dusk elf. Elizana fires a bolt into one of the dragons before the dusk elf grapples her from behind. Freebird and Umnos trail behind as Strahd charms Umnos into keeping his distance long enough to bite Freebird over and over. Freebird limps into the dragon and gargoyle infested room as Strahd drains his life away, killing him in front of his powerless peers. <br /><br />

            Strahd summons a horde of bats that begin to swirl around the room, suffocating what little light there was to begin with.  He stares into the eyes of Elizana and Umnos before his only remaining bride, Ludmilla appears from a dark hallway. <br /><br />

            “The dungeons are empty” Ludmilla barks at Strahd. “Give me these two.”<br /><br />

            Strahd considers the peculiarity of this moment and offers the sunseekers a choice.  Follow Ludmilla, to where or why no one is sure, or finish the fight with Strahd. Umnos agrees to go with the bride so long as he can take the corpse of Freebird, and Elizana sticks with him. <br /><br />

            When Umnos and Elizana first came to Castle Ravenloft together, they were five strong. Now Freebird is dead, Ireena and Lancelot are missing, and Umnos and Elizana were best by Strahd in his castle. Beated and broken, they are less than half the party they were just days before. <br /><br />

            The gargoyles lead the two sunseekers through twisted hallways and spiraling staircases down and up and snaking through the confusing halls of Castle Ravenloft. Just as they are almost sure which floor they are on, they arrive in the Brazier Room. <br /><br />

            Guarded by two nine-foot-tall iron statues of knights of horseback, poised to charge with swords drawn, there is a large brazier with different colored crystals loosely connected to its brim. Above the brazier is a large hourglass with the following inscription:<br /><br />

            Cast a stone into the fire<br />
            Violet leads to the mountain spire<br />
            Orange to the castle’s peak<br />
            Red if lore is what you seek<br />
            Green to where the coffins hide<br />
            Indigo to the master’s bride<br />
            Blue to ancient magic’s womb<br />
            Yellow to the master’s tomb<br /><br />

            Ludmilla fastens the violet stone tightly in its place and nods to the sunseekers to stand around the brazier. Ludmilla joins them as flames, without heat, rise around them. Umnos motions to Elizana to sneak one of the loose crystals.  She snatches up the blue crystal just as the flames hit the ceiling. <br /><br />

            As the flames die down, the temperature drops with them - significantly. They are in a different room in a different place. Outside the sound of large teeth snapping and heavy machinery hitting the ground as Ludmilla shouts “Wolfie!” There is a second sound in the distance. It is the voice of Safzira calling out to Kasimir. 


        
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J18