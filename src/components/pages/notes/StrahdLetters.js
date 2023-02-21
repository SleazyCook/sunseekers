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
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Strahd Notes</span>
          </h2>
      </div>

      <p className="strahd-descriptive">
        The following notes and artifacts have been recovered by the Sunseekers.  The intent of this collection is to better understand the vampire lord Count Strahd von Zarovich. 
      </p>

      <h3 className="heading-tertiary u-underline">Death House Note</h3>

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
      

      {/* Welcome Letter */}
      <h3 className="heading-tertiary u-underline">Sunseeker Welcome Letter</h3>

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
          My most pathetic servant,<br />
          I am not a messiah sent to you by the Dark Powers of this land. I have not come to lead you on a path to immortality. However many souls you have bled on your hidden altar, however many visitors you have tortured in your dungeon, know that you are not the ones who brought me to this beautiful land. You are but worms writhing in my earth.<br />
          You say that you are cursed, your fortunes spent. You abandoned love for madness, took solace in the bosom of another woman, and sired a stillborn. Cursed by darkness? Of that I have no doubt. Save you from the wretchedness? I think not. I much prefer you as you are.<br /><br />


          Your dread lord and master,<br />
          Strahd von Zarovich

          </p>
        </div>
      </div> {/* End Notes-Box */}

      {/* Strahd's First Appearance */}
      <h3 className="heading-tertiary u-underline">Strahd's First Appearance</h3>

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


      <Footer />

    </div>
  )
}

export default StrahdLetters