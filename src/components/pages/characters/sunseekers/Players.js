import React from 'react'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

import NPCs from './NPCs'

function Players() {
  return (
    <div className="characters">

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Sunseekers</span>
        </h2>
      </div>

      <h3 className="heading-tertiary">Player Characters</h3>

      {/* Row One - Gen 1*/}

      <div className="flexbox">

        <div className="flexbox__item"> {/* Safzira Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <div className="card__heading">Safzira &nbsp;</div>
            </div> {/* card__side--front End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Rogue Lvl 4
                  <span>Arcane Trickster</span>
                </div> {/* card__description--top End */}
                <div className="card__description--bottom">
                  <i>Half-Elf, active</i>
                  <br />
                  <br />
                Safzira might have a greater body count than the Barbarian, but in a totally different way. She is well known for her unpredictable fighting style and close relationships.
                </div> {/* card__description--bottom End */}
              </div> {/* card__description End */}
              <div className="card__heading">Safzira &nbsp;</div>
            </div> {/* card__side--back End */}
          </div> {/* card End */}
        </div> {/* Safzira End */}

        <div className="flexbox__item"> {/* Elizana Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <div className="card__heading">Elizana &nbsp;</div>
            </div> {/* card__side--front End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Rogue Lvl 5
                  <span>Thief</span>
                </div> {/* card__description--top End */}
                <div className="card__description--bottom">
                <i>Halfling, active</i>
                  <br />
                  <br />
                Elizana is known for her kindness and curiousity. Her spirits have been tested greatly since arriving in Barovia.
                </div> {/* card__description--bottom End */}
              </div> {/* card__description End */}
              <div className="card__heading">Elizana &nbsp;</div>
            </div> {/* card__side--back End */}
          </div> {/* card End */}
        </div> {/* Elizana End */}

        <div className="flexbox__item"> {/* German Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <div className="card__heading">German &nbsp;</div>
            </div> {/* card__side End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Barbarian Lvl 4
                  <span>Zealot</span>
                </div> {/* card__description--top End */}
                <div className="card__description--bottom">
                <i>Human, inactive</i>
                  <br />
                  <br />
                German the Barbarian, a man of few words, lives for battle. He will protect his fellow Sunseekers to the death just for the thrill of a fight.
                </div> {/* card__description--bottom End */}
              </div> {/* card__description End */}
              <div className="card__heading">German &nbsp;</div>
            </div> {/* card__side--back End */}
          </div> {/* card End */}
        </div> {/* German End */}

        <div className="flexbox__item"> {/* Damani Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--4">&nbsp;</div>
              <div className="card__heading">Umnos &nbsp;</div>
            </div> {/* card__side End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Cleric Lvl 5
                  <span>Forge Domain</span>
                </div> {/* card__description--top End */}
                <div className="card__description--bottom">
                <i>Half-Elf, active</i>
                  <br />
                  <br />
                Discovered in a Vallaki prison healing Lars Kjurls, Umnos soon joined the Sunseekers after Ireena was saved from the wolves.
                </div> {/* card__description--bottom End */}
              </div> {/* card__description End */}
              <div className="card__heading">Umnos &nbsp;</div>
            </div> {/* card__side--back End */}
          </div> {/* card End */}
        </div> {/* Damani End */}

        <div className="flexbox__item"> {/* Margarito Start */}
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--5">&nbsp;</div>
              <div className="card__heading">Zoro &nbsp;</div>
            </div> {/* card__side End */}
            <div className="card__side card__side--back">
              <div className="card__description">
                <div className="card__description--top">
                  Fighter Lvl 4
                  <span>subclass</span>
                </div> {/* card__description--top End */}
                <div className="card__description--bottom">
                <i>Human, active</i>
                  <br />
                  <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet feugiat nulla, bibendum tincidunt lectus venenatis pellentesque.
                </div> {/* card__description--bottom End */}
              </div> {/* card__description End */}
              <div className="card__heading">Zoro &nbsp;</div>
            </div> {/* card__side--back End */}
          </div> {/* card End */}
        </div> {/* Margarito End */}

        
      </div> {/* row End */}

      <br />
      <NPCs />


      <Footer />


    </div>
  )
}

export default Players