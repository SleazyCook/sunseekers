import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Vistani() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Vistani</span>
          </h2>
      </div>

      <div className="flexbox">

      <div className="flexbox__item--npc"> {/* Vistani Nomads Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Vistani Nomads</div>
            <div className="npc-card__img npc-card__img--vistani-nomads">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              15-65, &nbsp;
              <i>
                 active
              </i>
              <br />
              <br />
              The Vistani are the only people in Strahd's Barovia that are allowed to come and go as they please.  The relationship between Strahd and the Vistani is mysterious to most people.  They are known to travel lightly though Barovia, although they are not considered welcome in most Barovian settlements.
            </div>
          </div>
        </div> {/* Vistani Nomads End */}

      <div className="flexbox__item--npc"> {/* Viktor Lazlo Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Viktor Lazlo</div>
            <div className="npc-card__img npc-card__img--viktor-lazlo">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              52, &nbsp;
              <i>
                 undead
              </i>
              <br />
              <br />
              The Vistana Viktor Lazlo hired the Sunseekers for a traveling show going to Barovia. At Durst Manor, he was beheaded by German the Barbarian for attempting to sacrifice the dog Lancelot on behalf of the Priests of Osybus. Has since become a revenant hell bent and soley fixated on killing German the barbarian.
            </div>
          </div>
        </div> {/* Viktor Lazlo End */}

        <div className="flexbox__item--npc"> {/* Tavern Owners Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Tavern Owners</div>
            <div className="npc-card__img npc-card__img--tavern-owners">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              35-45, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Group of Vistani woman who frequent the Blood on the Vine Tavern (unclear whether they truly own it or not). Took a liking to German the Barbarian. Told Safzira and German the Barbarian to visit Madame Eva if they want to ever leave Barovia.
            </div>
          </div>
        </div> {/* Tavern Owners End */}

        <div className="flexbox__item--npc"> {/* Madame Eva Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Madame Eva</div>
            <div className="npc-card__img npc-card__img--madame-eva">&nbsp;</div>
            <div className="npc-card__bonds">
              <RiQuestionMark />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Vistani leader and fortune teller. Gives the party a card reading that will lead them to people and objects that will assist them in the battle against Strahd.
            </div>
          </div>
        </div> {/* Madame Eva End */}

        <div className="flexbox__item--npc"> {/* Tser Pool Camp Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Tser Pool Camp</div>
            <div className="npc-card__img npc-card__img--tser-pool">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              15-??, &nbsp;
              <i>
                 active
              </i>
              <br />
              <br />
              The Tser Pool Encampment is one of two hubs for traveling Vistani. Not too far from the Village of Barovia, Madame Eva is their leader and resident fortune teller. 
            </div>
          </div>
        </div> {/* Tser Pool Camp End */}

        <div className="flexbox__item--npc"> {/* Vallaki Vistani Camp Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Vallaki Camp</div>
            <div className="npc-card__img npc-card__img--vallaki-camp">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              7-??, &nbsp;
              <i>
                 active
              </i>
              <br />
              <br />
              The Vistani Camp outside of Vallaki is one of two hubs for traveling Vistani.  The brothers Luvash and Arrigal are in charge of the camp at the top of the hill. The base of the hill is surrounded by hovels - which house the last of the dusk elves.
            </div>
          </div>
        </div> {/* Vallaki Vistani Camp End */}

        <div className="flexbox__item--npc"> {/* Luvash Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Luvash</div>
            <div className="npc-card__img npc-card__img--luvash">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              34, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Leader of the Vallaki Vistani Camp, he lives atop the hill along with his younger brother Arrigal and his young daughter Arabelle.  His daughter was kidnapped by the Barovian Bluto and he expressed his thanks to the Sunseekers by offering them silver bars upon her safe return.
            </div>
          </div>
        </div> {/* Luvash End */}

        <div className="flexbox__item--npc"> {/* Arrigal Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Arrigal</div>
            <div className="npc-card__img npc-card__img--arrigal">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              32, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              The younger of the brothers in charge of the Vallaki Vistani Camp.  While smaller than Luvash, Arrigal has deadly reputation.  Luckily the Sunseekers won them over by rescuing his niece Arabelle.
            </div>
          </div>
        </div> {/* Arrigal End */}

        <div className="flexbox__item--npc"> {/* Arabelle Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Arabelle</div>
            <div className="npc-card__img npc-card__img--arabelle">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              7, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Arabelle, the daughter of Luvash and niece of Arrigal, is the youngest of all of the Vistani in Barovia. She was kidnapped by Bluto and rescued by the Sunseekers.  She may or may not have some kind of psychic visions like Madame Eva.
            </div>
          </div>
        </div> {/* Arabelle End */}

        <div className="flexbox__item--npc"> {/* Alexei Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Alexei</div>
            <div className="npc-card__img npc-card__img--alexei">&nbsp;</div>
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
              Alexei, one of the younger Vistani in Barovia, was on lookout duty when he fell asleep during the kidnapping of young Arabelle.  The Sunseekers witnessed Luvash whipping him for the offense. 
            </div>
          </div>
        </div> {/* Alexei End */}

        <div className="flexbox__item--npc"> {/* Kasimir Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Kasimir</div>
            <div className="npc-card__img npc-card__img--kasimir">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              350, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Kasimir Velikov is the leader of the few remaining Dusk Elves, who were embraced by the Vistani. He in turn adopted the Vistani name Velikov. He once killed his own sister to keep Strahd's eyes off of her. 
            </div>
          </div>
        </div> {/* Kasimir End */}

        <div className="flexbox__item--npc"> {/* Dusk Elves Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Dusk Elves</div>
            <div className="npc-card__img npc-card__img--dusk-elves">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              340-450, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              The Dusk Elves lost in a war against Strahd before the Mists descended on Barovia.  After they killed one of their own to keep her from becoming his consort, he had their women killed and their men castrated. The few that remain have been embraced by the Vallaki Vistani Camp. 
            </div>
          </div>
        </div> {/* Dusk Elves End */}

        <div className="flexbox__item--npc"> {/* Ezmerelda Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ez d'Avenir</div>
            <div className="npc-card__img npc-card__img--ezmerelda">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              28, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Ezmerelda d'Avenir is a mysertious Vistana who saved Freebird and Umnos from certain death during their fight with Volenta in the Chamber of Sorrow. She stole the Tome Of Strahd from the Sunseekers and disappeared. 
            </div>
          </div>
        </div> {/* Ezmerelda End */}



      </div>

      <Footer />

    </div>
  )
}

export default Vistani