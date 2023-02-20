import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Merchants() {
  return (
    <div>
      
      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Vallaki Merhcants</span>
          </h2>
      </div>
      
      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Izek Strazni Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Izek Strazni</div>
            <div className="npc-card__img npc-card__img--izek-strazni">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              23, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Izek Strazni was once a Vallaki orphan with a violent childhood.  The Baron took responsibility for the troubled child.  As Izek grew up he continued to get into trouble the Baron saw an opportunity.  Izek was made the chief of the Vallaki Guard and is known to use his monstrous arm to get his hands dirty. It was discovered that he has a fascination with custom dolls that resemble Ireena. 
            </div>
          </div>
        </div> {/* Izek Strazni End */}

      </div> {/* Flexbox End */}

      <Footer />

    </div>
  )
}

export default Merchants