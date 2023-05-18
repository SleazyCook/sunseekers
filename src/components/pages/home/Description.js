import React from 'react'

function Description() {
  return (
    <div className="description">

      {/* New Take on This: Divide component into three columns. Text in the middle, an image on each side. Raven on one side, ravenloft crest on the other perhaps? */}

      <div className="heading-tertiary">Tabletop Companion Guide & Interactive Game</div>

      <div className="description__flex-container">

        <div className="description__text-box">
      
          <p className="description__text-actual">
            <div className="headline">The Plight for the Sunlight</div>
            <br />

            Curse of Strahd: Plight of the Sunseekers is a virtual tabletop based on a popular 5E Dungeons and Dragons campaign. Many adventurers have stumbled into the dread domain of Barovia only to meet their fate at the hands of the vampie lord Count Strahd Von Zarovich or some other twisted horror. Those who remain continue to seek out the sun and make it back home alive. 
            <br /><br />
            The adventures of the Sunseekers so far are detailed in the chapters below.
          </p>
          <br />
        </div>

        <div className="description__game">
          <a href="https://death-house.netlify.app" target="_blank" className="description__game-link">
            <img className="description__game-img" src="https://i.imgur.com/j8zRB5s.png" />
          </a>
        </div>


      </div> {/* End of Flex Container */}



    </div>
  )
}

export default Description