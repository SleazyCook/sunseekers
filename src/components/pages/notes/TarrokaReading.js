import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function TarrokaReading() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Tarroka Reading</span>
          </h2>
      </div>

      <p className="strahd-descriptive">
        Her old hands working deftly, the ancient seer removes fourteen cards from the top of the deck, setting them aside. The remaining cards, she shuffles nimbly twice, three times, four.<br /><br />

        Madame Eva sets both decks upon the surface of the velvet table. Closing her eyes, she places her right hand over the surface of the larger deck. The crimson flames dim and swirl in eldritch patterns as her lips move silently, a distant tension spreading through the air. The sounds of the rustling trees and rippling pool beyond the tent's walls begin to dim, the external world growing mute and insubstantial as the space within grows more solid - more real.<br /><br />

        Slowly, reverently, the crone draws three cards from the top of the deck, laying them face down separately on the table, with the second laid between and above its partners. She then moves to the smaller deck, drawing two more cards. The first, she places below the first three, forming a cross. The second, she places in the center.<br /><br />

        The lights of the candles sway like silhouettes, leaning in toward the cards like anxious watchers - yet the air in the tent is perfectly still. No light intrudes through the seams in the tent's walls; no voice rings out in the silence. Shadows and mist swirl at the boundaries of the tent, where the darkness of deepest night dwells - but here, at its center, light yet reigns.<br /><br />

        The crone then moves her wrinkled hand to the left-most card - the first. She closes her eyes and tilts her head, as if listening to an unspoken word. The arcane lights swirl and then shift, their colors changing to a deep, piercing blue. ""This card tells of history. Knowledge of the ancient will help you better understand your enemy.<br /><br />

        She flips the card.

      </p>

      <div className="flexbox flexbox--tarroka"> {/* transmuter start */}

        <div className="flexbox__item"> 
          <div className="tarroka-card">
            <div className="tarroka-card__side tarroka-card__side--front">
              <img src="https://i.imgur.com/i29osPB.png" />
            </div> {/* side--front end */}
            <div className="tarroka-card__side tarroka-card__side--back">
              <img src="https://i.imgur.com/i5jBvTr.png" />
            </div> {/* side--back end */}
          </div> {/* card end */}
        </div> 

        <div className="flexbox__item flexbox__item--tarroka">
          <h3 className="heading-tertiary">
            <u>The Eight of Glyphs</u><br />
            The Transmuter</h3>
            <p className="tarroka-script u-center-text">
            "This card tells of history. Knowledge of the ancient will help you better understand your enemy." <br />
            Go to a place of dizzying heights, where the stone itself is alive. 
            </p>
            <br /><br />
            <p className="typewriter-script u-center-text">
              UPDATE:<br/>
              The Tome of Strahd was found atop a tall tower within Castle Ravenloft.
            </p>
        </div> 

      </div> {/* transmuter end */}


      <div className="flexbox flexbox--tarroka"> {/* transmuter start */}

        <div className="flexbox__item"> 
          <div className="tarroka-card">
            <div className="tarroka-card__side tarroka-card__side--front">
              <img src="https://i.imgur.com/i29osPB.png" />
            </div> {/* side--front end */}
            <div className="tarroka-card__side tarroka-card__side--back">
              <img src="https://i.imgur.com/i5jBvTr.png" />
            </div> {/* side--back end */}
          </div> {/* card end */}
        </div> 

        <div className="flexbox__item flexbox__item--tarroka">
          <h3 className="heading-tertiary">
            <u>The Eight of Glyphs</u><br />
            The Transmuter</h3>
            <p className="tarroka-script u-center-text">
            "This card tells of history. Knowledge of the ancient will help you better understand your enemy." <br />
            Go to a place of dizzying heights, where the stone itself is alive. 
            </p>
            <br /><br />
            <p className="typewriter-script u-center-text">
              UPDATE:<br/>
              The Tome of Strahd was found atop a tall tower within Castle Ravenloft.
            </p>
        </div> 

      </div> {/* transmuter end */}


      <Footer />

    </div>
  )
}

export default TarrokaReading