import React from 'react'

function Description() {
  return (
    <div className="description">

      <div className="heading-tertiary">Welcome to Curse of Strahd: Plight of the Sunseekers</div>

      <div className="description__flex-container">

        <div className="description__text-box">
          <p className="description__text-actual">
            Curse of Strahd: Plight of the Sunseekers is a virtual tabletop based on a popular 5E Dungeons and Dragons campagin. Many adventurers have stumbled into the dread domain of Barovia only to meet their fate at the hands of the vampie lord Count Strahd Von Zarovich or some other twisted horror. Those who remain continue to seek out the sun and make it back home alive. 
            <br /><br />
            The adventures of the Sunseekers so far are detailed in the chapters below.
          </p>
        </div>

        <div className="description__game">
          <span className="description__flex-title">Play Curse of Strahd: Durst Manor</span>
          <a href="https://death-house.netlify.app" target="_blank" className="description__game-link">
            <img className="description__game-img" src="https://i.imgur.com/WdGbV1C.png" />
          </a>
        </div>


      </div> {/* End of Flex Container */}



    </div>
  )
}

export default Description