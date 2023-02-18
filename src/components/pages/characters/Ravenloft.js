import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Ravenloft() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Castle Ravenloft</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Strahd Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Strahd</div>
            <div className="npc-card__img npc-card__img--strahd">&nbsp;</div>
            <div className="npc-card__bonds">
              <RiQuestionMark />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 undead
              </i>
              <br />
              <br />
              Count Strahd von Zarovich is a vampire with immense power that has lorded over all of Barovia for possibly centuries. He is attempting to marry Ireena because he believes that she is a reincarnation of his first love.  He gifted the party a basket with a note when they left Durst Manor. He has invited the party to have dinner with him at Ravenloft Castle.
            </div>
          </div>
        </div> {/* Strahd End */}

        <div className="flexbox__item--npc"> {/* Bucephalus Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Bucephalus</div>
            <div className="npc-card__img npc-card__img--bucephalus">&nbsp;</div>
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
              Strahd's loyal steed. Little is known of this incredible creature, save that he can fly and seems magically enrobbed in flame. He matches descriptions of a creature called a Nightmare.
            </div>
          </div>
        </div> {/* Bucephalus End */}

        <div className="flexbox__item--npc"> {/* Anastrasya Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Anastrasya</div>
            <div className="npc-card__img npc-card__img--anastrasya">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 dead
              </i>
              <br />
              <br />
              Anastrasya Karelova was a bride of Strahd and dominated on the battlefield. After a week of the bones of St. Andral missing from the St. Andral's Church, Anastrasya leads a horde of the undead to attack Vallaki with the goal of killing Ireena. Strahd rips her head off in frustration.
            </div>
          </div>
        </div> {/* Anastrasya End */}

        <div className="flexbox__item--npc"> {/* Volenta Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Volenta</div>
            <div className="npc-card__img npc-card__img--volenta">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 dead
              </i>
              <br />
              <br />
              Volenta Popofsky was a bride of Strahd and protected Castle Ravenloft from the shadows.  She fought Elizana, Freebird, and Umnos in the Heart of Sorrow and almost defeated them until a mysterious Vistana woman entered the fight late and turned the tades of fate against her.
            </div>
          </div>
        </div> {/* Volenta End */}

        <div className="flexbox__item--npc"> {/* Ludmilla Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ludmilla</div>
            <div className="npc-card__img npc-card__img--ludmilla">&nbsp;</div>
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
              Ludmilla Vilisevic is a bride of Strahd.  Unlike the other brides, Ludmilla enjoys her freedom leaning into her curiousity by exploring Barovia in search of her next big discovery.  
            </div>
          </div>
        </div> {/* Ludmilla End */}

        <div className="flexbox__item--npc"> {/* Escher Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Escher</div>
            <div className="npc-card__img npc-card__img--escher">&nbsp;</div>
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
              Escher Belasco, Strahd's latest consort, was once an adventurer in a group much like the Sunseekers.  Strahd murdered the group when he grew bored of them, but kept Escher around for his musical ability. He resides in Castle Ravenloft.   
            </div>
          </div>
        </div> {/* Escher End */}

        <div className="flexbox__item--npc"> {/* Rahadin Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Rahadin</div>
            <div className="npc-card__img npc-card__img--rahadin">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Rahadin is Strahd's chamberlain and right-hand man. As a dusk elf, he turned on his own people and swore loyalty to Strahd.  His duties include punishing the rest of the dusk elves for their transgressions against Strahd.
            </div>
          </div>
        </div> {/* Rahadin End */}

        <div className="flexbox__item--npc"> {/* Lief Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Lief Lipsiege</div>
            <div className="npc-card__img npc-card__img--accountant">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Lief Lipsiege is Strahd's exhausted accountant.  Working all hours in Castle Ravenloft, Lief is usually consumed by his accountant duties although he can occasionally be helpful. 
            </div>
          </div>
        </div> {/* Lief Lipsiege End */}

        <div className="flexbox__item--npc"> {/* Cyrus Belview Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Cyrus Belview</div>
            <div className="npc-card__img npc-card__img--cyrus-belview">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              ??, &nbsp;
              <i>
                 alive
              </i>
              <br />
              <br />
              Cyrus Belview for works in Castle Ravenloft as a servant of Strahd. He mostly dwells below the first floor. The sunseekers were once magically oblicated to deliver a letter to this indivudual by Morgantha.
            </div>
          </div>
        </div> {/* Cyrus Belview End */}

      </div> {/* Flexbox End */}
      
    </div>
  )
}

export default Ravenloft