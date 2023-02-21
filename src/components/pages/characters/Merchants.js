import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

import { GiAnvilImpact } from 'react-icons/gi'
import { GiTravelDress } from 'react-icons/gi'
import { GiPotionBall } from 'react-icons/gi'
import { GiLeatherArmor } from 'react-icons/gi'

import { GiOldWagon } from 'react-icons/gi'
import { GiBrokenPottery } from 'react-icons/gi'
import { GiBowArrow } from 'react-icons/gi'


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

        <div className="flexbox__item--npc"> {/* Dragomir Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Dragomir <GiAnvilImpact /></div>
            <div className="npc-card__img npc-card__img--dragomir-valisov">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              50, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Dragomir Valisov is the proud purveryor of The Cracked Anvil which offers functional pieces including horseshoes, nails, hinges, spearheads, arrowheads, and daggers.  He silverd weapons for the first generation of Sunseekers before the Feast of St. Andral. 
            </div>
          </div>
        </div> {/* Dragomir End */}

        <div className="flexbox__item--npc"> {/* Alek Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Alek <GiTravelDress /></div>
            <div className="npc-card__img npc-card__img--alek-alastroi">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              31, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Alek Alastroi is the eldest of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread.  
            </div>
          </div>
        </div> {/* Alek End */}

        <div className="flexbox__item--npc"> {/* Andrej Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Andrej <GiTravelDress /></div>
            <div className="npc-card__img npc-card__img--andrej-alastroi">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              30, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Andrej Alastroi is at the center of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread.  
            </div>
          </div>
        </div> {/* Andrej End */}

        <div className="flexbox__item--npc"> {/* Alana Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Alana <GiTravelDress /></div>
            <div className="npc-card__img npc-card__img--alana-alastroi">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              29, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Alana Alastroi is the youngest of the Alastroi siblings and co-owner of Endless Delights.  The siblings are known for their materlistic priorities and expert level skills with a needle and thread.  
            </div>
          </div>
        </div> {/* Alana End */}

        <div className="flexbox__item--npc"> {/* Harkus Stefanovich Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Harkus <GiPotionBall /></div>
            <div className="npc-card__img npc-card__img--harkus-stefanovich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              58, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Harkus Stefanovich is the soft-spoken, but nonetheless eccentric owner of Stefanovich Apothecary. Possessed with an unnerving bedside manner and a lack of appreciation for personal space, Harkus is nonetheless a simple apothecary, rather than a potion-maker or alchemist. 
            </div>
          </div>
        </div> {/* Harkus Stefanovich End */}

        <div className="flexbox__item--npc"> {/* Fatima Lukresh Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Fatima <GiLeatherArmor /></div>
            <div className="npc-card__img npc-card__img--fatima-lukresh">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              44, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Fatima Lukresh is the dark-humored and abrasive owner of Lukresh Tannery. She is most experienced in the production of straps, harnesses, and belts, but can craft normal and studded leather armor on commission if asked. Her work is crude, but functional.
            </div>
          </div>
        </div> {/* Fatima Lukresh End */}

        <div className="flexbox__item--npc"> {/* Tural Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Tural <GiOldWagon /></div>
            <div className="npc-card__img npc-card__img--tural">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              66, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Tural is Vallaki’s is a gruff, unpleasant man and most experienced wainwright. He occasionally exits Vallaki to do business with the Vistani, which leaves him a social pariah amongst some of the more mistrustful townsfolk.
            </div>
          </div>
        </div> {/* Tural End */}

        <div className="flexbox__item--npc"> {/* Bilbo Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Bilbo <GiBrokenPottery /></div>
            <div className="npc-card__img npc-card__img--bilbo">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              62, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Bilbo is the gentle and soft spoken owner of Odds N Ends.  His shop offers a variety of inexpensive items.
            </div>
          </div>
        </div> {/* Bilbo End */}

        <div className="flexbox__item--npc"> {/* Ana Krogarov Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ana <GiBowArrow /></div>
            <div className="npc-card__img npc-card__img--ana-krogarov">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              27, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Ana Krogarov is the owner of The Straight Arrow. She crafts short and long bows as well as arrows and quills. Ana is a distant cousin of Bluto, Vallaki's town drunk.
            </div>
          </div>
        </div> {/* Ana Krogarov End */}

      </div> {/* Flexbox End */}

      <Footer />

    </div>
  )
}

export default Merchants