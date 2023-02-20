import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Baron() {
  return (
    <div>
      
      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Baron Vallakovich</span>
          </h2>
      </div>
      
      <div className="flexbox flexbox--npc">

      <div className="flexbox__item--npc"> {/* Baron Start */}
        <div className="npc-card">
          <div className="npc-card__heading">The Baron</div>
          <div className="npc-card__img npc-card__img--baron-vallakovich">&nbsp;</div>
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
            Baron Vargas Vallakovich is the Burgomaster of Vallaki. Secured behind the walls of Vallki, the Baron has spent decades of his life in denial about Strahd's Barovia.  He has made the utterance of the vampire's name illegal and mandates weekly attendence to city festivals.  He blames the Sunseekers for the Feast of St. Andral and has ordered their arrest.
          </div>
        </div>
      </div> {/* Baron End */}

      <div className="flexbox__item--npc"> {/* Baroness Start */}
        <div className="npc-card">
          <div className="npc-card__heading">The Baroness</div>
          <div className="npc-card__img npc-card__img--baroness">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartDislike />
          </div>
          <div className="npc-card__description">
            55, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            The Baron's wife is a devout member of the Church of the Morning Lord. She spends most of her time having tea with the poorest citizens of Vallaki spreading the word of the Morning Lord and assisting with festival planning.
          </div>
        </div>
      </div> {/* Baroness End */}

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

      <div className="flexbox__item--npc"> {/* Vallaki Guards Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Vallaki Guards</div>
          <div className="npc-card__img npc-card__img--vallaki-guards">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
          </div>
          <div className="npc-card__description">
            18-45, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            The Guards of Vallaki are the most elite militarized force in Barovia.  They are loyal to the Burgomaster and follow the orders of Izek Strazni.  
          </div>
        </div>
      </div> {/* Vallaki Guards */}

      <div className="flexbox__item--npc"> {/* Victor Vallakovich Start */}
        <div className="npc-card">
          <div className="npc-card__heading">Victor Vallakovich</div>
          <div className="npc-card__img npc-card__img--victor-vallakovich">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
          </div>
          <div className="npc-card__description">
            18, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Victor Vallakovich hates his father, the Baron, and is obsessed with magic.  He once courted Stella Wachter until a spell went awry and damaged her mind.  He now spends all of his time in the Burgomaster's attic secluded from everyone, especially his family, until he can figure out how to repair the damage and escape Barovia with his love. 
          </div>
        </div>
      </div> {/* Victor Vallakovich End */}

      <div className="flexbox__item--npc"> {/* Butler Start */}
        <div className="npc-card">
          <div className="npc-card__heading">The Butler</div>
          <div className="npc-card__img npc-card__img--butler">&nbsp;</div>
          <div className="npc-card__bonds">
            <IoIosHeartEmpty />
          </div>
          <div className="npc-card__description">
            70, &nbsp;
            <i>
              alive
            </i>
            <br />
            <br />
            Grygori Antonova is the Burgomaster's butler and cook.  He used to work for the Baron's father.  He spends his days running the Burgomaster's mansion, cooking, cleaning, and assisting with festival preparation.
          </div>
        </div>
      </div> {/* Butler End */}
      
      </div> {/* Flexbox End */}
      
    </div>
  )
}

export default Baron