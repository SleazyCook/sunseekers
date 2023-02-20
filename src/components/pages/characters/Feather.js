import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Feather() {
  return (
    <div>
      
      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Keepers of the Feather</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* danika Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Danika Dorakova</div>
            <div className="npc-card__img npc-card__img--danika-dorakova">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              35, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Owner, and barkeep, of the Blue Water Inn in Vallaki along with her husband Urwin. The Inn takes in the few visitors that come into Vallaki and it is also the Vallaki hub for the secret organization known as the Keepers of the Feather. 
            </div>
          </div>
        </div> {/* danika End */}

        <div className="flexbox__item--npc"> {/* Urwin Martikov Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Urwin Martikov</div>
            <div className="npc-card__img npc-card__img--urwin-martikov">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              38, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Owner, and chef, of the Blue Water Inn in Vallaki along with his wife Danika. The Inn takes in the few visitors that come into Vallaki and it is also the Vallaki hub for the secret organization known as the Keepers of the Feather. 
            </div>
          </div>
        </div> {/* Urwin Martikov End */}

        <div className="flexbox__item--npc"> {/* Brom Martikov Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Brom Martikov</div>
            <div className="npc-card__img npc-card__img--brom-martikov">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              12, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Brom and his younger brother Bray are the youngest members of the Keepers of the Feather.  They are friendly to patrons as they are known to run around the Blue Water Inn.
            </div>
          </div>
        </div> {/* Brom Martikov End */}

        <div className="flexbox__item--npc"> {/* Bray Martikov Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Bray Martikov</div>
            <div className="npc-card__img npc-card__img--bray-martikov">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              10, &nbsp;
              <i>
                dead
              </i>
              <br />
              <br />
              Bray and his older brother Brom are the youngest members of the Keepers of the Feather.  They are friendly to patrons as they are known to run around the Blue Water Inn. He was killed by Anastrasya's undead soldiers during the Feast of St. Andral.
            </div>
          </div>
        </div> {/* Bray Martikov End */}

      </div> {/* Flexbox End */}

      <Footer />

    </div>
  )
}

export default Feather