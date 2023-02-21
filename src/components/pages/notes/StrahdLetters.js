import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function StrahdLetters() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main" id="page-top">
            Journals</span>
          <span className="heading-secondary--sub">
            Strahd Notes</span>
          </h2>
      </div>

      <p className="strahd-descriptive">
        The following notes and artifacts have been recovered by the Sunseekers.  The intent of this collection is to better understand the vampire lord Count Strahd von Zarovich. 
      </p>


      <div className="notes-nav">
        <ul className="flexbox">
          <li className="flexbox__item"><a href="#death-house">Death House Note</a></li>
          <li className="flexbox__item"><a href="#welcome-letter">Welcome Letter</a></li>
          <li className="flexbox__item"><a href="#first-appearance">First Appearance</a></li>
          <li className="flexbox__item"><a href="#sergei-letter">Sergei Letter</a></li>
          <li className="flexbox__item"><a href="#tome-of-strahd">Tome of Strahd</a></li>
        </ul>
      </div>

      

      {/* Death House Note */}
      <h3 className="heading-tertiary u-underline" id="death-house">Death House Note</h3>

      <p className="strahd-descriptive">
        NOTE FROM DEATH HOUSE<br />
        [discovered in the possession of Gustav Durst]
      </p>

      <div className="notes-box">
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/QQiDvfn.png" />
          </div>
          <div className="notes-box__image-caption">
            Crystal Ball  
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph strahd-script">
          My most pathetic servant,<br />
          I am not a messiah sent to you by the Dark Powers of this land. I have not come to lead you on a path to immortality. However many souls you have bled on your hidden altar, however many visitors you have tortured in your dungeon, know that you are not the ones who brought me to this beautiful land. You are but worms writhing in my earth.<br />
          You say that you are cursed, your fortunes spent. You abandoned love for madness, took solace in the bosom of another woman, and sired a stillborn. Cursed by darkness? Of that I have no doubt. Save you from the wretchedness? I think not. I much prefer you as you are.<br /><br />


          Your dread lord and master,<br />
          Strahd von Zarovich

          </p>
        </div>
      </div> {/* End Notes-Box */}

      <a href="#page-top">Return to top</a>
      

      {/* Welcome Letter */}
      <h3 className="heading-tertiary u-underline" id="welcome-letter">Sunseeker Welcome Letter</h3>

      <p className="strahd-descriptive">
        Strahd’s Welcome Letter<br />
        [discovered on a large gift basket outside of Durst Manor]
      </p>

      <div className="notes-box">
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/UkrmWrI.png" />
          </div>
          <div className="notes-box__image-caption">
            Fruit basket 
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph strahd-script">
          My most pathetic servant,<br /><br />
          I am not a messiah sent to you by the Dark Powers of this land. I have not come to lead you on a path to immortality. However many souls you have bled on your hidden altar, however many visitors you have tortured in your dungeon, know that you are not the ones who brought me to this beautiful land. You are but worms writhing in my earth.<br />
          You say that you are cursed, your fortunes spent. You abandoned love for madness, took solace in the bosom of another woman, and sired a stillborn. Cursed by darkness? Of that I have no doubt. Save you from the wretchedness? I think not. I much prefer you as you are.<br /><br />


          Your dread lord and master,<br />
          Strahd von Zarovich

          </p>
        </div>
      </div> {/* End Notes-Box */}
      <a href="#page-top">Return to top</a>



      {/* Strahd's First Appearance */}
      <h3 className="heading-tertiary u-underline" id="first-appearance">Strahd's First Appearance</h3>

      <p className="strahd-descriptive">
        Strahd’s first appearance<br />
        [recorded on Old Svalich Road between the Village of Barovia and the Vistani Tser Pool Encampment]
      </p>

      <div className="notes-box">
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/wW4qxDR.png" />
          </div>
          <div className="notes-box__image-caption">
            Strahd appears 
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph strahd-script">
            I wanted to welcome you to my kingdom. I chose the name Barovia to honor my father, the great King Barov. Did you know that? Of course not. Well,  I conquered this valley in his name. Believe me, it wasn't much to look at before I spruced up the place.<br /><br />

            I wanted to be the first to make amends on behalf of the Vistani. I'm aware of the... misunderstanding between the dearly departed Mr. Lazlo and your...sizable associate. These free spirited people, while they are my most loyal subjects, are anything but foot soldiers. They have a silly saying "Even the Best Men Die.'' They hold no ill will toward any of you, and they will be happy to host your party for the duration of your stay in Barovia.<br /><br />

            Though, Ireena, my dear, you simply must understand that You deserve to be my Queen.  In fact, I must insist on this. <br /><br />

            I know you all are absolutely titillated by my surprise visit and believe me I. am. too., but I really must be going. When you are ready to return the favor, there is a black carriage up the road. It will take you to my home without any.. outside interference.


          </p>
        </div>
      </div> {/* End Notes-Box */}
      <a href="#page-top">Return to top</a>




      {/* Sergei's Letter */}
      <h3 className="heading-tertiary u-underline" id="sergei-letter">Sergei's Letter</h3>

      <p className="strahd-descriptive">
        Sergei’s Letter to Strahd<br />
        [Discovered next to an assassin’s dagger by Umnos and Elizana on Strahd’s throne in the Audience Hall at Castle Ravenloft]
      </p>

      <div className="notes-box">
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/nngoYtw.png" />
          </div>
          <div className="notes-box__image-caption">
            Ba'al Verzi dagger 
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph sergei-script">
            My dearest brother!<br /><br />
            We have heard the terrible news about the attempt at your life - my shock and concern could not be greater! I cannot wait to finally visit you in Castle Ravenloft. Please let me know if there is anything we can do for you in the meantime. I will keep you in my prayers, Strahd, as always!<br /><br /><br />
            Your devoted brother, <br />
            Sergei
          </p>
        </div>
      </div> {/* End Notes-Box */}
      <a href="#page-top">Return to top</a>




      {/* Tome of Strahd */}
      <h3 className="heading-tertiary u-underline" id="tome-of-strahd">Tome of Strahd</h3>

      <p className="strahd-descriptive">
        Tome of Strahd (excerpt) <br />
        [discovered within Castle Ravenloft]
      </p>

      <div className="notes-box">
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/udpvjxn.png" />
          </div>
          <div className="notes-box__image-caption">
            Strahd portrait
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph strahd-script">
            I am the ancient. I am the land. My beginnings are lost in the darkness of the past. I was the warrior, I was good and just. I thundered across the land like the wrath of a just god, but the war years and the killing years wore down my soul as the wind wears stone into sand.<br /><br />
            All goodness slipped from my life. I found my youth and strength gone, and all I had left was death. My army settled in the valley of Barovia and took power over the people in the name of a just god, but with none of a god’s grace or justice. 
            I called for my family, long unseated from their ancient thrones, and brought them here to settle in the castle Ravenloft. They came with a younger brother of mine, Sergei. He was handsome and youthful. I hated him for both.<br /><br />
            From the families of the valley, one spirit shone above all others. A rare beauty, who was called “perfection,” “joy,” and “treasure.” Her name was Tatyana, and I longed for her to be mine. <br /><br />
            I loved her with all my heart. I loved her for her youth. I loved her for her joy. But she spurned me! “Old one” was my name to her - “elder” and “brother” also. Her heart went to Sergei. They were betrothed. The date was set. <br /><br />
            With words she called me “bnother,” but when I looked into her eyes they reflected another name: “death.” It was the death of the aged that she saw in me. She loved her youth and enjoyed it. But I have squandered mine.<br /><br />

          </p>
        </div>

            
        <div className="notes-box__image-box notes-box__image-box--right">
          <div className="notes-box__image">
            <img src="https://i.imgur.com/6SASbnM.png" />
          </div>
          <div className="notes-box__image-caption">
            Family crest
          </div>
        </div>

        <div className="notes-box__paragraph-box">
          <p className="notes-box__paragraph strahd-script">

            The death she saw in me turned her from me. And so I came to hate death - my death. My hate is very strong. I would not be called “death” so soon. I made a pact with death, a pact of blood. On the day of the wedding, I killed Sergei, my brother. My pact was sealed with his blood. <br /><br />
            I found Tatyana weeping in the garden east of the chapel. She fled from me. She would not let me explain, and a great anger swelled within me. She had to understand the pact I made for her. I pursued her. Finally, in despair, she flung herself from the walls of Ravenloft, and I watched everything I ever wanted fall from my grasp forever.<br /><br />
            I have studied so much since then. “Vampyr” is my new name. I still lust for life and youth, and I curse the living that took them from me. Even the sun is against me. It is the sun and its light I fear the most., but little else can harm me now. Even a stake through my heart does not kill me, though it holds me from movement. But the sword, that cursed sword that Sergei brought! I must dispose of that awful tool! I fear and hate it as much as the sun.<br /><br />
            I have often hunted for Tatyana. I have even felt her within my grasp, but she escapes. She taunts me! She taunts me! What will it take to bend her love to me?<br /><br />
            I now reside far below Ravenloft. I live among the dead and sleep beneath the very stones of this hollow castle of despair. I shall seal shut the wall of the stairs so that none may disturb me.

          </p>
        </div>
      </div> {/* End Notes-Box */}
      <a href="#page-top">Return to top</a>


      <Footer />

    </div>
  )
}

export default StrahdLetters