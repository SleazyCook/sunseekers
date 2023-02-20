import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'


function Church() {
  return (
    <div>
      
      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Village of Barovia</span>
          </h2>
      </div>

      {/* 

      father lucien petrovich

      franz petrovich

      *guy in krezk will do here*

      *any randomly created character can go above the orphange, or at least above the smaller orphans

      orphanage - claudia belasco

      milivaj

      orphans


      */}

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Father Donavich Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Father Donavich</div>
            <div className="npc-card__img npc-card__img--father-donavich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              65, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              While investigating the disappearance of villagers, the party uncovers Father Donavich's dark secret - his hidden son, a vampire spawn, in the basement of the church and feeding him villagers from the Village of Barovia. After is son is killed, the party chases after Father Donavich. He confesses to his crimes before the burgomaster and is sent to jail.
            </div>
          </div>
        </div> {/* Father Donavich End */}

        <div className="flexbox__item--npc"> {/* Father Lucien Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Father Lucien</div>
            <div className="npc-card__img npc-card__img--lucien-petrovich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              70, &nbsp;
              <i>
                dead
              </i>
              <br />
              <br />
              Father Lucien Petrovich presides over St. Andral's Church in Vallaki. Offers thought and prayers when party seeks his assistance with the catatonic Millovaj. Dies during the event of The Feast of St. Andral.
            </div>
          </div>
        </div> {/* Father Lucien End */}

        <div className="flexbox__item--npc"> {/* Franz Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Father Franz</div>
            <div className="npc-card__img npc-card__img--franz-petrovich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              22, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Franz Petrovich is the grandson of Lucien, who was killed in the Feast of St. Andral.  Franz has since stepped up to become the only priest of the Morning Lord in Vallaki.
            </div>
          </div>
        </div> {/* Franz End */}

        <div className="flexbox__item--npc"> {/* Claudia Belasco Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Claudia Belasco</div>
            <div className="npc-card__img npc-card__img--claudia-belasco">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              70, &nbsp;
              <i>
                dead
              </i>
              <br />
              <br />
              Claudia Belasco is the headmistress of St. Andral's Orphanage in Vallaki. Although closely affiliated with the church, the orphanage owned and operated by her family for many years.
            </div>
          </div>
        </div> {/* Claudia Belasco End */}

        <div className="flexbox__item--npc"> {/* Milivoj Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Milivoj</div>
            <div className="npc-card__img npc-card__img--milivoj">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              19, &nbsp;
              <i>
                dead
              </i>
              <br />
              <br />
              Milivoj grew up in St. Andral's Orphanage and since aging out of the program he has been a loyal groundskeeper for both the orphanage and the church.  Milivoj, influenced by a shadow demon, stole the bones of St. Andral for the coffin maker, and was left in a catatonic state. Upon its release, the shadow demon killed young Milivoj
            </div>
          </div>
        </div> {/* Milivoj End */}
      



      </div> {/* Flexbox End */}

      <Footer />
    
    </div> 
  )
}

export default Church