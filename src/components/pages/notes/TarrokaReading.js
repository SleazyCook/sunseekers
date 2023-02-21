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