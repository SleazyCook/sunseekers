import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import { IoIosHeart } from 'react-icons/io'
import { IoIosHeartDislike } from 'react-icons/io'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiQuestionMark } from 'react-icons/ri'

function Vallaki() {
  return (
    <div>
      
    <Header />
    <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Character Guide</span>
          <span className="heading-secondary--sub">
            Vallaki Citizens</span>
          </h2>
      </div>

      <div className="flexbox flexbox--npc">

        <div className="flexbox__item--npc"> {/* Rictavio Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Rictavio </div>
            <div className="npc-card__img npc-card__img--rictavio">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              80, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Posing as Rictavio the Bard, Rudolph Van Richten is actually a famous monster hunter preparing to kill Strahd. He performs shows with his tiger in Vallaki by day and fulfills reconnaissance requests for the Sunseekers by night.
            </div>
          </div>
        </div> {/* Rictavio End */}

        <div className="flexbox__item--npc"> {/* Blinksy Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Blinksy </div>
            <div className="npc-card__img npc-card__img--gadof-blinsky">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              38, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Gadof Blinsky is the timid owner of Blinky's Toys.  His macabre toys can be found across Barovia with the tag "Is No Fun? Is No Blinsky!"  He is seen with a monkey companion Piccolo, on loan from Rictavio.  He is being forced by Izek to make custom dolls that resemble Ireena.
            </div>
          </div>
        </div> {/* Blinksy End */}

        <div className="flexbox__item--npc"> {/* Madame Genie Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Madame Genie </div>
            <div className="npc-card__img npc-card__img--madame-genie">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              80, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Madame of The Swift Finish, a brothel in Vallaki. Genie has offered her establishment as a safe space for the Sunseekers to meet with Rudolph Van Richten. 
            </div>
          </div>
        </div> {/* Madame Genie End */}

        <div className="flexbox__item--npc"> {/* Genie's Ladies Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Genie's Ladies </div>
            <div className="npc-card__img npc-card__img--genies-ladies">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              20-75, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Genie's Ladies work as escorts at The Swift Finish. While not all of Genie's Ladies are female, they are known for their discretion and professionalism. Most of the Ladies needed a place to go after they aged out of St. Andral's Orphanage.
            </div>
          </div>
        </div> {/* Genie's Ladies End */}

        <div className="flexbox__item--npc"> {/* Vasili Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Vasili </div>
            <div className="npc-card__img npc-card__img--vasili">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              "28", &nbsp;
              <i>
                inactive
              </i>
              <br />
              <br />
              Vasili von Holtz was an accountant in Vallaki's high society.  As a popular lover of the arts, Vasili courted Ireena when she came to town.  It was revealed by Anastrasya during the Feast of St. Andral that Vasili was none other than Strahd von Zarovich in disguise. 
            </div>
          </div>
        </div> {/* Vasili End */}

        <div className="flexbox__item--npc"> {/* Henrik Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Henrik </div>
            <div className="npc-card__img npc-card__img--henrik-van-der-root">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              70, &nbsp;
              <i>
                dead
              </i>
              <br />
              <br />
              Henrik van der Root was a coffin maker in Vallaki.  Strahd sent vampires to his shop to torment him and conspire to steal the bones of St. Andral.  When the Sunseekers approached him in his shop, they discovered a nest of vampires that slaughtered Henrik as the Feast of St. Andral began.
            </div>
          </div>
        </div> {/* Henrik End */}

        <div className="flexbox__item--npc"> {/* Bluto Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Bluto </div>
            <div className="npc-card__img npc-card__img--bluto">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartDislike /><IoIosHeartDislike /><IoIosHeartDislike />
            </div>
            <div className="npc-card__description">
              60, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Bluto was known as Vallaki's resident drunk.  He once enjoyed fishing, but after years of a dry harvest he kidnapped the young Vistana Arabelle and offered her to a possible god of the lake.  The Sunseekers rescued Arabelle and turned Bluto over to the Vallaki Vistani Camp to answer for his crime. 
            </div>
          </div>
        </div> {/* Bluto End */}

        <div className="flexbox__item--npc"> {/* Lars Kjurls Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Lars Kjurls </div>
            <div className="npc-card__img npc-card__img--lars-kjurls">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              33, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Lars Kjurls was a member of the Vallaki Guard.  During the Festival of the Sun he made the mistake of laughing for only a second when the Burgomaster's effigy collapsed. He was dragged by horse to the Vallaki jail and broke free with the help of Elizana and Umnos.
            </div>
          </div>
        </div> {/* Lars Kjurls End */}

        <div className="flexbox__item--npc"> {/* Orphans Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Orphans </div>
            <div className="npc-card__img npc-card__img--orphans">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeartEmpty />
            </div>
            <div className="npc-card__description">
              5-17, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              The orphans at Vallaki's St. Andral's Orphanage come from all across Barovia.  Adoption is extremely rare so Claudia Belasco does what she can to look after them all until they reach adult age.  Some of the orphans were "rescued" by the Sunseekers under false pretenses provided by the witches at the Old Mill.  Not all of the "rescued" children made it home.
            </div>
          </div>
        </div> {/* Orphans End */}

        <div className="flexbox__item--npc"> {/* Felix Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Felix </div>
            <div className="npc-card__img npc-card__img--felix">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              8, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Felix came into the orphanage with a locket that was revealed to be possessed by a shadow demon.  German the Barbarian made a deal with the shadow demon to release the child and spare his life. 
            </div>
          </div>
        </div> {/* Felix End */}

        <div className="flexbox__item--npc"> {/* Hair Puller Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Hair Puller </div>
            <div className="npc-card__img npc-card__img--hair-puller">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              9, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              The Hair Pulling Girl, like many orphans when they first arrive at St. Andral's orphanage, lacks a proper name.  Her anxieties cause her to nearly contstantly pull out her own hair. She was one of the "rescued" children that were went to the Old Mill. She was fortunate to come back in one piece.
            </div>
          </div>
        </div> {/* Hair Puller End */}

        <div className="flexbox__item--npc"> {/* Lizard Boy Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Lizard Boy </div>
            <div className="npc-card__img npc-card__img--lizard-boy">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart />
            </div>
            <div className="npc-card__description">
              8, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              The Lizard Boy, like many orphans when they first arrive at St. Andral's orphanage, lacks a proper name.  His anxieties cause him to nearly contstantly pull out his genitals and play with them calling it his "lizard". He was one of the "rescued" children that were went to the Old Mill. He was fortunate to come back in one piece.
            </div>
          </div>
        </div> {/* Lizard Boy End */}

        <div className="flexbox__item--npc"> {/* Ace Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Ace </div>
            <div className="npc-card__img npc-card__img--ace">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              10, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Ace was adopted by the the Sunseekers, but quickly brought back to the orphanage after they made the terrible mistake of attempting to "rescue" several orphans on behalf of a group of ladies who were revealed to be witches grinding children into bone flour. 
            </div>
          </div>
        </div> {/* Ace End */}

        <div className="flexbox__item--npc"> {/* Szoldar Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Szoldar </div>
            <div className="npc-card__img npc-card__img--szoldar-szoldarovich">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              50, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Szoldar and his brother Yevgeni are skilled wolf hunters.  They assist the Vallaki Guard on missions outside the walls as they are the most familiar with the area and it's threats.  
            </div>
          </div>
        </div> {/* Szoldar End */}

        <div className="flexbox__item--npc"> {/* Yevgeni Start */}
          <div className="npc-card">
            <div className="npc-card__heading">Yevgeni </div>
            <div className="npc-card__img npc-card__img--yevgeni-krushkin">&nbsp;</div>
            <div className="npc-card__bonds">
              <IoIosHeart /><IoIosHeart /><IoIosHeart />
            </div>
            <div className="npc-card__description">
              45, &nbsp;
              <i>
                alive
              </i>
              <br />
              <br />
              Yevgeni and his brother Szoldar are skilled wolf hunters.  They assist the Vallaki Guard on missions outside the walls as they are the most familiar with the area and it's threats.  
            </div>
          </div>
        </div> {/* Yevgeni End */}
      
      </div> {/* Flexbox End */}

    <Footer />

    </div>
  )
}

export default Vallaki