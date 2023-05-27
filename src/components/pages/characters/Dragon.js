import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Dragon() {
  return (
    <div>
      


      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Order of the Silver Dragon</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Argynvost Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Argynvost</div>
            <div className="npc-card__img npc-card__img--argynvost">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                deceased
              </i>
              <br />
              <br />
              Argynvost was once a great knight and silver dragon. He founded Argynvostholt and the Order of the Silver Dragon to protect Barovia from the evil power of the Amber Temple.  Argynvost fought against Strahd's army but was ultimately slain by Strahd himself. Strahd kept Argynvost's dragon skull as a trophy and ultimately made his way into the Amber Temple.
            </div>
          </div>
        </div> {/* Argynvost End */}

        <div className="flexbox__item--npc"> {/* Vladimir Horngaard Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Sir Vladimir</div>
            <div className="npc-card__img npc-card__img--vladimir-horngaard">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Vladimir Horngaard was a fierce knight in the Order of the Silver Dragon.  When Argynvost was slain by Strahd, Vladimir's bloodlust outlived him - turning not only him, but all of the knights within the Order, into revenants. Strahd sees them as a minor nuisance.
            </div>
          </div>
        </div> {/* Vladimir Horngaard End */}

        <div className="flexbox__item--npc"> {/* Godfrey Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Sir Godfrey</div>
            <div className="npc-card__img npc-card__img--godfrey-gilwyn">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Godfrey Gilwyn fought alongside Argynvost and Sir Vladimir Horngaard.  If Vladimir's hate and bloodlust brough the knights of the Order back from the death, it was Godfrey's love and patience that allowed a handful of knights to hold even the faintest hold on their humanity.
            </div>
          </div>
        </div> {/* Godfrey End */}

        <div className="flexbox__item--npc"> {/* Godfrey's Knights Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Godfrey's Knights</div>
            <div className="npc-card__img npc-card__img--godfreys-revenants">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Godfrey Gilwyn and a few other knights, while revenants, have been trying to hold on to what remains of their humanity.  They mostly stay in Argynvostholt to avoid any bloodthirsty tempation.  Their memories and the rest of what makes them more than monsters is fading away.  Their numbers are dwindling as more knights become monsters.
            </div>
          </div>
        </div> {/* Godfrey's Revenants End */}

        <div className="flexbox__item--npc"> {/* Revenants Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Revenants</div>
            <div className="npc-card__img npc-card__img--vladimirs-revenants">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Many knights from the Order of the Silver Dragon have descended completely into bloodthirsty revenants.  While they are fated to fight Strahd and his forces for all eternity, they will cut through anything, or anyone, that stands in their way.
            </div>
          </div>
        </div> {/* Godwyn's Revenants End */}

      <div className="flexbox__item--npc"> {/* Sir Erich Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Sir Erich</div>
            <div className="npc-card__img npc-card__img--erich-norinthaal">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Erich Norinthaal is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to finish his biggest hunt.
            </div>
          </div>
        </div> {/* Sir Erich End */}

        <div className="flexbox__item--npc"> {/* Sir Damien Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Sir Damien</div>
            <div className="npc-card__img npc-card__img--damien-hargrove">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Damien Hargrove is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to offer his lost love the engagement ring he made for her.
            </div>
          </div>
        </div> {/* Sir Damien End */}

        <div className="flexbox__item--npc"> {/* Sir Robern Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Sir Robern</div>
            <div className="npc-card__img npc-card__img--robern-teray">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Sir Robern Boarwin is one of the few remaining knights in Sir Godfrey's circle at Argynvostholt.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is pass on a family heirloom.
            </div>
          </div>
        </div> {/* Sir Sir Robern End */}
      
        <div className="flexbox__item--npc"> {/* Sir Arthund Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Arthund</div>
            <div className="npc-card__img npc-card__img--arthund-boarwin">&nbsp;</div>
            <div className="npc-card__bonds">
            <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                undead
              </i>
              <br />
              <br />
              Arthund Boarwin didn't get the chance to become a full-fledged knight.  Following a theory from Sir Godfrey, his is on a mission to fulfill a passion from his mortal life to possibly end his undead existence. His mission is to perform a truly heroic deed in order to become a proper knight of the Order.
            </div>
          </div>
        </div> {/* Sir Arthund End */}

        



      </div> {/* Flexbox End */}



    </div>
  )
}

export default Dragon