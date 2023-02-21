import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Wachterhaus() {
  return (
    <div>

    <Header />
    <Navigation />

    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        <span className="heading-secondary--main">
          Character Guide</span>
        <span className="heading-secondary--sub">
          Wachterhaus</span>
        </h2>
    </div>

    <div className="flexbox flexbox--npc">

      <div className="flexbox__item--npc"> {/* Lady Wachter Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Lady Wachter </div>
          <div className="npc-card__img npc-card__img--fiona-wachter">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
          </div>
          <div className="npc-card__description">
            60, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Lady Fiona Wachter is the richest woman in Barovia.  She is conspiring against the Baron to replace him as Burgomaster of Vallaki with the help of her right-hand man Ernst Larnak and the Sunseekers. 
          </div>
        </div>
      </div> {/* Lady Wachter End */}

      <div className="flexbox__item--npc"> {/* Lord Wachter Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Lord Wachter </div>
          <div className="npc-card__img npc-card__img--nikolai-wachter">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartEmpty />
          </div>
          <div className="npc-card__description">
            61, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Lord Nikolai Wachter is the patriarch of the richest family in Barovia. Since taking ill, he has not left Wachterhaus in some time, leving his wife, Fiona, to lead their house by herself.
          </div>
        </div>
      </div> {/* Lord Wachter End */}

      <div className="flexbox__item--npc"> {/* Ernst Larnak Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Ernst Larnak </div>
          <div className="npc-card__img npc-card__img--ernst-larnak">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
          </div>
          <div className="npc-card__description">
            55, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Ernst Larnak has served Wachterhaus his entire life.  He is very loyal to them and treated like a member of the family. Ernst's responsibilites to Wachterhaus mostly involve keeping and eye on everything going on in Vallaki.
          </div>
        </div>
      </div> {/* Ernst Larnak End */}

      <div className="flexbox__item--npc"> {/* Stella Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Stella Wachter</div>
          <div className="npc-card__img npc-card__img--stella-wachter">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartEmpty />
          </div>
          <div className="npc-card__description">
            17, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Stella Wachter is the youngest child of Lord and Lady Wachter. She once courted the Burgomaster's son Victor until one of his spells misfired and caused her to go insane. She spends her days locked in her room within Wachterhaus until her condition can be properly corrected.
          </div>
        </div>
      </div> {/* Stella End */}

      <div className="flexbox__item--npc"> {/* Nikolai Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Nikolai Wachter</div>
          <div className="npc-card__img npc-card__img--nikolai-jr">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartEmpty />
          </div>
          <div className="npc-card__description">
            28, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Nikolai Wachter is the eldest son of Lord and Lady Wachter and the future of Wachterhaus. He spends most of his time drinking at the Blue Water Inn with his brother Karl and other patrons. 
          </div>
        </div>
      </div> {/* Nikolai End */}

      <div className="flexbox__item--npc"> {/* Karl Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Karl Wachter</div>
          <div className="npc-card__img npc-card__img--karl-wachter">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartEmpty />
          </div>
          <div className="npc-card__description">
            26, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Karl Wachter is the middle child of Lord and Lady Wachter.  He spends most of his time drinking at the Blue Water Inn with his brother Nikolai and other patrons.
          </div>
        </div>
      </div> {/* Karl End */}

    </div> {/* Flexbox End */}

    <Footer />


    </div>
  )
}

export default Wachterhaus