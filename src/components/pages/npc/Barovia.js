import React from 'react'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'

function Barovia() {
  return (
    <div className="npc-cards">

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Non-Player Characters</span>
          <span className="heading-secondary--sub">
            Village of Barovia</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Rose Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Rose Durst</div>
            <div className="npc-card__img npc-card__img--rose">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              11, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              After asking for help for their baby brother Walter, it was revealed that Rose and Thorn are ghosts. Their bodies were locked in their room leavin them to starve to death while their parents led a cult in the basement. Their bones were buried finally giving them peace
            </div>
          </div>
        </div> {/* Rose End */}

        <div className="flexbox__item--npc"> {/* Thorn Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Thorn Durst</div>
            <div className="npc-card__img npc-card__img--thorn">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              7, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              After asking for help for their baby brother Walter, it was revealed that Rose and Thorn are ghosts. Their bodies were locked in their room leavin them to starve to death while their parents led a cult in the basement. Their bones were buried finally giving them peace
            </div>
          </div>
        </div> {/* Thorn End */}

        <div className="flexbox__item--npc"> {/* Gustav Durst Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Gustav Durst</div>
            <div className="npc-card__img npc-card__img--gustav">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              48, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Gustav Durst, once a wealthy land owner before Strahd arrived in Barovia, was left in ruin and joined the Priests of Osybus. He had an affair with the nursemaid and commited suicide
            </div>
          </div>
        </div> {/* Gustav Durst End */}

        <div className="flexbox__item--npc"> {/* Elizabeth Durst Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Elizabeth Durst</div>
            <div className="npc-card__img npc-card__img--elizabeth">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              44, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Elizabeth Durst, once a wealthy land owner before Strahd arrived in Barovia, was left in ruin and joined the Priests of Osybus. He had an affair with the nursemaid and commited suicide
            </div>
          </div>
        </div> {/* Elizabeth Durst End */}

        <div className="flexbox__item--npc"> {/* Walter Durst Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Walter Durst</div>
            <div className="npc-card__img npc-card__img--walter">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              0, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Sacrified by Elizabeth Durst, baby Walter became the life force of a flesh mound that killed the Durst Manor cultists. The Sunseekers killed the flesh mound  and buried his remains
            </div>
          </div>
        </div> {/* Walter Durst End */}

        <div className="flexbox__item--npc"> {/* Durst Nursemaid Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Durst Nursemaid</div>
            <div className="npc-card__img npc-card__img--nursemaid">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              24, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Birth mother of Baby Walter. Murdered by the jealous and hateful Elizabeth Durst
            </div>
          </div>
        </div> {/* Durst Nursemaid End */}

      </div>



    </div>
  )
}

export default Barovia