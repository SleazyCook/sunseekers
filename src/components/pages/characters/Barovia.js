import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Barovia() {
  return (
    <div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
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

        <div className="flexbox__item--npc"> {/* Mrs. Cobb Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Mrs. Cobb</div>
            <div className="npc-card__img npc-card__img--mrs-cobb">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              60, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Elizana encounters Mrs. Cobb while investigating some scratches on villagers homes. Gets eaten by dying husband that turns into a zombie.
            </div>
          </div>
        </div> {/* Mrs. Cobb End */}

        <div className="flexbox__item--npc"> {/* Mr. Cobb Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Mr. Cobb</div>
            <div className="npc-card__img npc-card__img--mr-cobb">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              65, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Elizana encounters Mrs. Cobb while investigating some scratches on villagers homes. Is terminally ill due to consuming well water. Dies and turns into a zombie, eats his wife, then chases after Elizana. Is killed by Elizana and Freebird outside his home.  
            </div>
          </div>
        </div> {/* Mr. Cobb End */}

        <div className="flexbox__item--npc"> {/* Kolyan Indirovich Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Kolyan Indirovich</div>
            <div className="npc-card__img npc-card__img--kolyan-indirovich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              60, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              Kolyan was the Burgomaster of the Village of Barovia, but passed away shortly before the Sunseekers arrived in his neck of the woods. His reputation was so strong that his beloved son was once known as Ismark the Lesser. Ireena pushed for a proper burial for him to which the Sunseekers happily obliged.   
            </div>
          </div>
        </div> {/* Kolyan Indirovich End */}

        <div className="flexbox__item--npc"> {/* Ismark Indirovich Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ismark Indirovich</div>
            <div className="npc-card__img npc-card__img--ismark-indirovich">&nbsp;</div>
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
              Newly appointed Burgomaster of the Village of Barovia, due to his fathers death. Meets German the Barbarian and Safzira in the local tavern to ask for help. Enlists the group to protect his sister, Ireena, in exchange for free food, drink and lodging anytime they are in the Village of Barovia. Sleeps with Safzira.  
            </div>
          </div>
        </div> {/* Ismark Indirovich End */}

        <div className="flexbox__item--npc"> {/* Ireena Kolyana Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ireena Kolyana</div>
            <div className="npc-card__img npc-card__img--ireena-kolyana">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              24, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Party is asked to protect her. She only joins the party if they assist her giving her father a proper burial. The party agrees. Ireena is being hunted by Strahd who wants to make her his bride. She may be a reincarnation of Strahds first love. Ireena is currently with the party in Vallaki and once courted Vasili von Holtz.
            </div>
          </div>
        </div> {/* Ireena Kolyana End */}

        <div className="flexbox__item--npc"> {/* Parriwimple Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Parriwimple</div>
            <div className="npc-card__img npc-card__img--parriwimple">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              28, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Follows his uncle's orders (Bildrath) Followed Elizana around the Village of Barovia to assist in her endeavors
            </div>
          </div>
        </div> {/* Parriwimple End */}

        <div className="flexbox__item--npc"> {/* Bildrath Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Bildrath</div>
            <div className="npc-card__img npc-card__img--bildrath">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              55, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Rude shop keeper in the Village of Barovia. Sells common items for 10x their normal value
            </div>
          </div>
        </div> {/* Bildrath End */}


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

        <div className="flexbox__item--npc"> {/* Doru Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Doru</div>
            <div className="npc-card__img npc-card__img--doru">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              30, &nbsp;
              <i>
                 deceased
              </i>
              <br />
              <br />
              While investigating the disappearance of villagers, the party uncovers Doru's dark secret - his hidden son, a vampire spawn, in the basement of the church and feeding him villagers from the Village of Barovia. After is son is killed, the party chases after Doru. He confesses to his crimes before the burgomaster and is sent to jail.
            </div>
          </div>
        </div> {/* Doru End */}
        

        <div className="flexbox__item--npc"> {/* Mary Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Mad Mary</div>
            <div className="npc-card__img npc-card__img--mad-mary">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              55, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Many villagers call her Mad Mary. She is a mother that is searching for her missing daughter, Gertruda. She enlists Elizana's assistance when Lancelot begins scratching on her front door. 
            </div>
          </div>
        </div> {/* Mary End */}

        <div className="flexbox__item--npc"> {/* Lancelot Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Lancelot</div>
            <div className="npc-card__img npc-card__img--lancelot">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
              <IoIosHeart />
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              2, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Small dog found in the Durst Manor. Party discovers that this dog belongs to a missing girl, Gertuda.
            </div>
          </div>
        </div> {/* Lancelot End */}

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


      </div>




    </div>
  )
}

export default Barovia