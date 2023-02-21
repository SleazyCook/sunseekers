import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Vallaki() {
  return (
    <div>
      
    <Header />
    <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Vallaki Citizens</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Rictavio Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Rictavio </div>
            <div className="npc-card__img npc-card__img--rictavio">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              80, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Posing as Rictavio the Bard, Rudolph Van Richten is actually a famous monster hunter preparing to kill Strahd. He performs shows with his tiger in Vallaki by day and fulfills reconnaissance requests for the Sunseekers by night.
            </div>
          </div>
        </div> {/* Rictavio End */}
      
      </div> {/* Flexbox End */}

    <Footer />

    </div>
  )
}

export default Vallaki