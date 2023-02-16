import React from 'react'

function Characters() {
  return (
    <div className="characters">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Player Characters</h2>
      </div>

      {/* Row One - Gen 1*/}

      <div className="flexbox">

        <div className="flexbox__item"> {/* Safzira Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <div className="card__heading">Safzira &nbsp;</div>
            </div> {/* card__side End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Rogue Lvl 4
                  <span>Arcane Trickster</span>
                </div>
                <div className="card__description--bottom">
                Safzira might have a greater body count than the Barbarian, but in a totally different way. She is well known for her unpredictable fighting style and close relationships.
                </div>
              </div>

              <div className="card__heading">Safzira &nbsp;</div>
            </div> {/* card__side End */}
          </div> {/* card End */}
        </div> {/* Safzira End */}

        <div className="flexbox__item"> {/* Elizana Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <div className="card__heading">Elizana &nbsp;</div>
            </div> {/* card__side End */}
          </div> {/* card End */}
        </div> {/* Elizana End */}

        <div className="flexbox__item"> {/* German Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <div className="card__heading">German &nbsp;</div>
            </div> {/* card__side End */}
          </div> {/* card End */}
        </div> {/* German End */}

        
      </div> {/* row End */}


    </div>
  )
}

export default Characters